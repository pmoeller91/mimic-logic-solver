import { ChestGrid } from '@/types/chestGrid';
import { GameInfo } from '@/types/state/gameInfo';
import { GAME_MODE } from '@/types/gameMode';
import { solveStandard } from './solveStandard';
import { solveRandom } from './solveRandom';

interface SolverParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

/**
 * Returns all possible solutions for the puzzle described by the corresponding
 * grid and gameInfo.
 */
const solve = ({ grid, gameInfo }: SolverParams) => {
  switch (gameInfo.gameMode) {
    case GAME_MODE.standard:
      return solveStandard({ grid, gameInfo });
    case GAME_MODE.random:
      return solveRandom({ grid, gameInfo });
    default:
      return null;
  }
  
};

export { solve };
