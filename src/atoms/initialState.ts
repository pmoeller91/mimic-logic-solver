import { GAME_MODE } from '@/types/gameMode';
import { GameInfo } from '@/types/state/gameInfo';

const initialState = {
  gameInfo: {
    numChests: 4,
    numMimics: 1,
    gameMode: GAME_MODE.standard,
  } satisfies GameInfo,
};

export { initialState };
