import { isSolvingAtom } from '@/atoms/solver/isSolvingAtom';
import { progressAtom } from '@/atoms/solver/progressAtom';
import { solutionAtom } from '@/atoms/solver/solutionAtom';
import { workerAtom } from '@/atoms/solver/workerAtom';
import { SOLVER_MESSAGE_TYPE } from '@/types/solverMessage';
import { ChestGrid } from '@/types/chestGrid';
import { GameInfo } from '@/types/state/gameInfo';
import SolverWorker from '../solver/worker?worker';
import { isErrorAtom } from '@/atoms/solver/isErrorAtom';
import { errorMessagesAtom } from '@/atoms/solver/errorMessagesAtom';
import { store } from '@/atoms/store';
import { solutionGridAtom } from '@/atoms/solver/solutionGridAtom';
import merge from 'deepmerge';
import { isNoValidSolutionAtom } from '@/atoms/solver/isNoValidSolutionAtom';

const createWorker = () => {
  let worker = store.get(workerAtom);
  if (!worker) {
    worker = new SolverWorker();
    store.set(workerAtom, worker);
  }
  return worker;
};

const abort = () => {
  const worker = store.get(workerAtom);
  if (worker) {
    worker.terminate();
    store.set(workerAtom, null);
    createWorker();
    store.set(progressAtom, 0);
    store.set(isSolvingAtom, false);
  }
};

const getWorker = () => {
  let worker = store.get(workerAtom);
  if (!worker) {
    worker = createWorker();
    store.set(workerAtom, worker);
  }
  return worker;
};

interface SolveParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

const solve = ({ grid, gameInfo }: SolveParams) => {
  const worker = getWorker();
  const isSolving = store.get(isSolvingAtom);
  if (isSolving) {
    return;
  }
  worker.onmessage = ({ data }) => {
    switch (data.type) {
      case SOLVER_MESSAGE_TYPE.progress:
        store.set(progressAtom, data.value);
        break;
      case SOLVER_MESSAGE_TYPE.end:
        store.set(solutionAtom, data.value);
        store.set(progressAtom, 1);
        store.set(isSolvingAtom, false);
        break;
      case SOLVER_MESSAGE_TYPE.error:
        store.set(isErrorAtom, true);
        store.set(errorMessagesAtom, data.value);
        store.set(isSolvingAtom, false);
        break;
      case SOLVER_MESSAGE_TYPE.noValidSolution:
        store.set(isNoValidSolutionAtom, true);
        break;
      default:
        break;
    }
  };
  store.set(solutionAtom, null);
  store.set(isSolvingAtom, true);
  store.set(isNoValidSolutionAtom, false);
  store.set(isErrorAtom, false);
  store.set(errorMessagesAtom, []);
  store.set(progressAtom, 0);
  store.set(solutionGridAtom, merge<ChestGrid>({}, grid));
  worker.postMessage({ grid, gameInfo });
};

export { store, abort, solve };
