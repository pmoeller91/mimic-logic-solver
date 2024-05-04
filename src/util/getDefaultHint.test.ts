import { CHEST_HINT_TYPE, ChestHintType } from "@/types/chestHint";
import { describe, it, expect } from "vitest";
import { getDefaultHint } from "./getDefaultHint";

describe("getDefaultHint", () => {
  describe("with any valid hint type", () => {
    it.each(Object.values(CHEST_HINT_TYPE))(
      'should return a hint with a matching type for hint type "%s"',
      (chestHintType) => {
        const defaultHint = getDefaultHint(chestHintType);
        expect(defaultHint.type).toEqual(chestHintType);
      },
    );
  });
  describe("with any missing hint type", () => {
    it("should return a hint with the ERROR type", () => {
      const badHintType = "__NONEXISTENT_HINT__" as ChestHintType;
      const defaultHint = getDefaultHint(badHintType);
      expect(defaultHint.type).toEqual(CHEST_HINT_TYPE.__error);
    });
  });
});
