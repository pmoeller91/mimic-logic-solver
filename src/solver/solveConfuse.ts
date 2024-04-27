import { ChestGrid } from "@/types/chestGrid";
import { GameInfo } from "@/types/state/gameInfo";
import merge from "deepmerge";
import { solveStandard } from "./solveStandard";
import { mergeSolutions } from "./mergeSolutions";
import { InternalSolverSolution } from "./internalSolverSolution";
import { getBlankSolution } from "./getBlankSolution";

interface SolveRandomParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

/**
 * Returns all possible solutions for the confuse-mode puzzle described by the
 * corresponding grid and gameInfo.
 */
const solveConfuse = ({ grid, gameInfo }: SolveRandomParams) => {
  const modifiedGrid = merge<ChestGrid>({}, grid);
  const solutions: InternalSolverSolution[] = [];
  modifiedGrid.rows.forEach((row) =>
    row.forEach((chest) => {
      chest.isConfused = true;
      const solution = solveStandard({ grid: modifiedGrid, gameInfo });
      if (solution) {
        solutions.push(solution);
      }
      delete chest.isConfused;
    }),
  );
  const finalSolution = getBlankSolution(gameInfo.numChests);
  solutions.forEach((solution) => mergeSolutions(finalSolution, solution));
  return finalSolution;
};

export { solveConfuse };
