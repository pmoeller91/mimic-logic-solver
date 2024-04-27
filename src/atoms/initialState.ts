import { GAME_MODE } from "@/types/gameMode";
import { GameInfo } from "@/types/state/gameInfo";
import { AllChests } from "./allChestsAtom";
import { createChest } from "@/util/createChest";
import { CHEST_DIRECTION, CHEST_HINT_TYPE } from "@/types/chestHint";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { CHEST_COLOR } from "@/types/chestColor";

interface GameState {
  gameInfo: GameInfo;
  allChests: AllChests;
}

const initialState: GameState = {
  gameInfo: {
    numChests: 4,
    numMimics: 1,
    numRobbers: 1,
    numItems: undefined,
    numGear: undefined,
    numGold: undefined,
    gameMode: GAME_MODE.standard,
  },
  allChests: [
    [
      createChest({
        color: CHEST_COLOR.blue,
        contents: CHEST_CONTENTS.unknown,
        hint: { type: CHEST_HINT_TYPE.selfNotMimic, params: [] },
      }),
      createChest({
        color: CHEST_COLOR.black,
        contents: CHEST_CONTENTS.gear,
        hint: {
          type: CHEST_HINT_TYPE.colorMoreMimics,
          params: [CHEST_COLOR.blue, CHEST_COLOR.red],
        },
      }),
      createChest(),
    ],
    [
      createChest({
        color: CHEST_COLOR.red,
        contents: CHEST_CONTENTS.item,
        hint: {
          type: CHEST_HINT_TYPE.directionMimic,
          params: [CHEST_DIRECTION.up],
        },
      }),
      createChest({
        color: CHEST_COLOR.blue,
        contents: CHEST_CONTENTS.item,
        hint: { type: CHEST_HINT_TYPE.selfAsleep, params: [] },
      }),
      createChest(),
    ],
    [createChest(), createChest(), createChest()],
  ],
};

export { initialState };
