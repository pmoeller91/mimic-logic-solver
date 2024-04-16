import { GAME_MODE } from '@/types/gameMode';
import { GameInfo } from '@/types/state/gameInfo';
import { AllChests } from './allChestsAtom';
import { createChest } from '@/util/createChest';
import { CHEST_DIRECTION } from '@/types/chestHint';
import { CHEST_COLOR } from '@/types/chestProperties';

interface GameState {
  gameInfo: GameInfo;
  allChests: AllChests;
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
  allChests: [
    [
      createChest({
        color: 'BLUE',
        contents: 'UNKNOWN',
        hint: { type: 'MIMIC_NOT_SELF', params: [] },
      }),
      createChest({
        color: 'BLACK',
        contents: 'GEAR',
        hint: {
          type: 'COLOR_MORE_MIMICS',
          params: [CHEST_COLOR.blue, CHEST_COLOR.red],
        },
      }),
      createChest(),
    ],
    [
      createChest({
        color: 'RED',
        contents: 'ITEM',
        hint: {
          type: 'MIMIC_DIRECTION',
          params: [CHEST_DIRECTION.up],
        },
      }),
      createChest({
        color: 'BLUE',
        contents: 'ITEM',
        hint: { type: 'ASLEEP', params: [] },
      }),
      createChest(),
    ],
    [createChest(), createChest(), createChest()],
  ],
};

export { initialState };
