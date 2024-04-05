import { GAME_MODE } from '@/types/gameMode';
import { GameInfo } from '@/types/state/gameInfo';

interface GameState {
  gameInfo: GameInfo;
}

const initialState: GameState = {
  gameInfo: {
    numChests: 4,
    numMimics: 1,
    numItems: undefined,
    numGear: undefined,
    numGold: undefined,
    gameMode: GAME_MODE.standard,
  },
};

export { initialState };
