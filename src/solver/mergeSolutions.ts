// Takes two valid solutions (equal-length arrays of maps) and merges them by

import { InternalSolverSolution } from './internalSolverSolution';

// summing like-valued keys in corresponding array entries
const mergeSolutions = (
  mergeTarget: InternalSolverSolution,
  toMerge: InternalSolverSolution
) => {
  toMerge.forEach((solution, i) => {
    solution.forEach((value, key) => {
      mergeTarget[i].set(key, (mergeTarget[i].get(key) ?? 0) + value);
    });
  });
};

export { mergeSolutions };
