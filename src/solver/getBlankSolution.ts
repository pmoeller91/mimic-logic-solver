import { ValidGridSizes } from '@/types/chestGrid';
import { InternalSolverSolution } from './internalSolverSolution';
import { ChestContents } from '@/types/chestProperties';

const getBlankSolution = (size: ValidGridSizes) => {
  const blankSolution: InternalSolverSolution = new Array(size)
    .fill(undefined)
    .map(() => new Map<ChestContents[], number>());
  return blankSolution;
};

export { getBlankSolution };
