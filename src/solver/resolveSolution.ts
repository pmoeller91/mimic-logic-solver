import { ChestGrid } from '@/types/chestGrid';
import { GameInfo } from '@/types/state/gameInfo';
import { InternalSolverSolution } from './internalSolverSolution';
import merge from 'deepmerge';
import { resolveHint } from './resolveHint';
import { getContentsKey } from './getContentsKey';

interface ResolveSolutionParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

// Takes a given solution and checks whether it is valid. May also pare down
// certain content possibilities for each chest, if a chest must be a certain
// content to allow a hint to be valid for instance.
const resolveSolution = ({
  grid,
  gameInfo: _gameInfo,
}: ResolveSolutionParams): InternalSolverSolution | null => {
  const resolvedGrid = merge<ChestGrid>({}, grid);
  if (
    resolvedGrid.rows
      .flat()
      .some((chest) => !resolveHint({ grid: resolvedGrid, chest }))
  ) {
    return null;
  }
  const solution: InternalSolverSolution = new Array(
    resolvedGrid.rows.flat().length
  )
    .fill(undefined)
    .map<InternalSolverSolution[number]>(() => new Map());
  resolvedGrid.rows.flat().forEach((chest, i) => {
    if (typeof chest.contents === 'string') {
      solution[i].set(getContentsKey([chest.contents]), 1);
    } else {
      solution[i].set(getContentsKey(chest.contents), 1);
    }
  });
  return solution;
};

export { resolveSolution };
