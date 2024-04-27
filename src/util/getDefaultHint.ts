import {
  CHEST_DIRECTION,
  CHEST_HINT_TYPE,
  CHEST_RANK,
  ChestHintOfType,
  ChestHintType,
} from "@/types/chestHint";
import { CHEST_COLOR } from "@/types/chestColor";

const defaultColor = CHEST_COLOR.red;
const defaultDirection = CHEST_DIRECTION.up;
const defaultNumber = 0;
const defaultRank = CHEST_RANK.topMost;

const getDefaultHint = <T extends ChestHintType>(hintType: T): ChestHintOfType<T> => {
  switch (hintType) {
    case CHEST_HINT_TYPE.mimicsNeighbors:
    case CHEST_HINT_TYPE.mimicsNotNeighbors:
    case CHEST_HINT_TYPE.mimicsNotSameColor:
    case CHEST_HINT_TYPE.mimicsSameColor:
    case CHEST_HINT_TYPE.selfAsleep:
    case CHEST_HINT_TYPE.selfNotMimic:
      return { type: hintType, params: [] } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.colorGold:
    case CHEST_HINT_TYPE.colorMimic:
    case CHEST_HINT_TYPE.colorNoGold:
    case CHEST_HINT_TYPE.colorNoMimic:
    case CHEST_HINT_TYPE.colorNoRobber:
    case CHEST_HINT_TYPE.colorRobber:
      return {
        type: hintType,
        params: [defaultColor],
      } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.colorMoreMimics:
    case CHEST_HINT_TYPE.colorSameMimics:
      return {
        type: hintType,
        params: [defaultColor, defaultColor],
      } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.colorNumMimics:
      return {
        type: hintType,
        params: [defaultNumber, defaultColor],
      } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.directionNotGold:
    case CHEST_HINT_TYPE.directionNotMimic:
    case CHEST_HINT_TYPE.directionNoRobber:
    case CHEST_HINT_TYPE.directionMimic:
    case CHEST_HINT_TYPE.directionGold:
    case CHEST_HINT_TYPE.directionRobber:
      return {
        type: hintType,
        params: [defaultDirection],
      } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.rankGold:
    case CHEST_HINT_TYPE.rankMimic:
    case CHEST_HINT_TYPE.rankNoGold:
    case CHEST_HINT_TYPE.rankNoMimic:
    case CHEST_HINT_TYPE.rankNoRobber:
    case CHEST_HINT_TYPE.rankRobber:
      return {
        type: hintType,
        params: [defaultRank],
      } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.rankMoreMimics:
    case CHEST_HINT_TYPE.rankSameMimics:
      return {
        type: hintType,
        params: [defaultRank, defaultRank],
      } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.mimicsNumber:
    case CHEST_HINT_TYPE.number:
      return {
        type: hintType,
        params: [defaultNumber],
      } as ChestHintOfType<T>;
    default:
      return {
        type: CHEST_HINT_TYPE.__error,
        params: [],
      } as ChestHintOfType<T>;
  }
};

export { getDefaultHint };
