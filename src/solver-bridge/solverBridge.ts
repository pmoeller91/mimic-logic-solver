import { isSolvingAtom } from '@/atoms/solver/isSolvingAtom';
import { progressAtom } from '@/atoms/solver/progressAtom';
import { solutionAtom } from '@/atoms/solver/solutionAtom';
import { workerAtom } from '@/atoms/solver/workerAtom';
import { SOLVER_MESSAGE_TYPE } from '@/types/solverMessage';
import { createStore } from 'jotai';
import { ChestGrid } from '@/types/chestGrid';
import { GameInfo } from '@/types/state/gameInfo';
import SolverWorker from '../solver/worker?worker';

const solverStore = createStore();

const createWorker = () => {
  let worker = solverStore.get(workerAtom);
  if (!worker) {
    worker = new SolverWorker();
    solverStore.set(workerAtom, worker);
  }
  return worker;
};

const abort = () => {
  const worker = solverStore.get(workerAtom);
  if (worker) {
    worker.terminate();
    solverStore.set(workerAtom, null);
    createWorker();
    solverStore.set(progressAtom, 0);
    solverStore.set(isSolvingAtom, false);
  }
};

const getWorker = () => {
  let worker = solverStore.get(workerAtom);
  if (!worker) {
    worker = createWorker();
    solverStore.set(workerAtom, worker);
  }
  return worker;
};

interface SolveParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

const solve = ({ grid, gameInfo }: SolveParams) => {
  const worker = getWorker();
  const isSolving = solverStore.get(isSolvingAtom);
  if (isSolving) {
    return;
  }
  worker.onmessage = ({ data }) => {
    switch (data.type) {
      case SOLVER_MESSAGE_TYPE.progress:
        solverStore.set(progressAtom, data.value);
        break;
      case SOLVER_MESSAGE_TYPE.end:
        solverStore.set(solutionAtom, data.value);
        solverStore.set(progressAtom, 100);
        solverStore.set(isSolvingAtom, false);
        break;
      default:
        break;
    }
  };
  solverStore.set(isSolvingAtom, true);
  worker.postMessage({ grid, gameInfo });
};

export { solverStore, abort, solve };
