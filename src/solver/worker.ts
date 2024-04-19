import {
  SOLVER_MESSAGE_TYPE,
  type OutboundSolverMessage,
} from '../types/solverMessage';
import { getErrors } from './getErrors';
import { solve } from './solve';

onmessage = function (
  this: DedicatedWorkerGlobalScope,
  ev: MessageEvent<OutboundSolverMessage>
) {
  const { grid, gameInfo } = ev.data;
  const errors = getErrors({ grid, gameInfo });
  if (errors.length > 0) {
    postMessage({
      type: SOLVER_MESSAGE_TYPE.error,
      value: errors,
    });
    return;
  }
  const solution = solve({ grid, gameInfo });

  // Convert from map to something that can be serialized
  const messageValue =
    solution?.map((chestSolution) => Array.from(chestSolution.entries())) ??
    new Array(grid.numChests).fill(undefined).map(() => []);

  if (!solution || solution[0].size === 0) {
    this.postMessage({
      type: SOLVER_MESSAGE_TYPE.noValidSolution,
    });
  }
  
  postMessage({
    type: SOLVER_MESSAGE_TYPE.end,
    value: messageValue,
  });
};
