import { CHEST_HINT_TYPE } from "@/types/chestHint";
import { describe, it, expect } from "vitest";
import { createChestGrid } from "@/util/chest-grid/createChestGrid";
import { GameInfo } from "@/types/state/gameInfo";
import { GAME_MODE } from "@/types/gameMode";
import { createChest } from "@/util/createChest";
import { getDefaultHint } from "@/util/getDefaultHint";
import { resolveHint } from "./resolveHint";

const defaultGrid = createChestGrid({ numChests: 9 });
const defaultGameInfo: GameInfo = {
  gameMode: GAME_MODE.standard,
  numChests: 9,
  numMimics: 3,
  numRobbers: 1,
};

describe("resolveHint", () => {
  describe("for every valid hint type", () => {
    it.each(Object.values(CHEST_HINT_TYPE))(
      'should return a boolean for chest hint type "%s"',
      (chestHint) => {
        const chest = createChest({ hint: getDefaultHint(chestHint) });
        let hintValid: null | boolean;
        try {
          hintValid = resolveHint({ grid: defaultGrid, chest, gameInfo: defaultGameInfo });
        } catch (e) {
          hintValid = null;
        }
        expect(hintValid).toBeTypeOf("boolean");
      },
    );
  });
  describe("for an invalid hint type", () => {
    it("should throw a RangeError", () => {
      const chest = createChest();
      chest.hint.type = "__INVALID_HINT_TYPE__" as "SELF_ASLEEP";
      expect(() => {
        resolveHint({ grid: defaultGrid, chest, gameInfo: defaultGameInfo });
      }).toThrow(RangeError);
    });
  });
});
