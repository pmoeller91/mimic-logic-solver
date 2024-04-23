import { ChestGrid } from '@/types/chestGrid';
import { GAME_MODE } from '@/types/gameMode';
import { GameInfo } from '@/types/state/gameInfo';
import merge from 'deepmerge';
import { solveStandard } from './solveStandard';
import { mergeSolutions } from './mergeSolutions';
import { InternalSolverSolution } from './internalSolverSolution';
import { getBlankSolution } from './getBlankSolution';

interface SolverParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

/**
 * Returns all possible solutions for the random-mode puzzle described by the
 * corresponding grid and gameInfo.
 */
const solveRandom = ({ grid, gameInfo }: SolverParams) => {
  const modifiedGameInfo = merge<GameInfo>({}, gameInfo);
  modifiedGameInfo.gameMode = GAME_MODE.standard;
  modifiedGameInfo.numGear = undefined;
  modifiedGameInfo.numItems = undefined;
  modifiedGameInfo.numGold = undefined;
  const maxMimics = Math.floor(gameInfo.numChests / 2);
  const numMimicsToTry = new Array(maxMimics)
    .fill(undefined)
    .map((_value, i) => i + 1);
  const solutions: InternalSolverSolution[] = [];
  numMimicsToTry.forEach((numMimics) => {
    modifiedGameInfo.numMimics = numMimics;
    const solution = solveStandard({ grid, gameInfo: modifiedGameInfo });
    if (solution) {
      solutions.push(solution);
    }
  });
  const finalSolution = getBlankSolution(gameInfo.numChests);
  solutions.forEach((solution) => mergeSolutions(finalSolution, solution));
  return finalSolution;
};

export { solveRandom };
