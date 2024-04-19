import {
  CHEST_DIRECTION,
  CHEST_HINT_TYPE,
  ChestHintOfType,
  ChestHintType,
} from '@/types/chestHint';
import { CHEST_COLOR } from '@/types/chestProperties';

const defaultColor = CHEST_COLOR.red;
const defaultDirection = CHEST_DIRECTION.up;

const getDefaultHint = <T extends ChestHintType>(
  hintType: T
): ChestHintOfType<T> => {
  switch (hintType) {
    case CHEST_HINT_TYPE.asleep:
    case CHEST_HINT_TYPE.mimicNotSelf:
      return { type: hintType, params: [] } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.colorMoreMimics:
      return {
        type: hintType,
        params: [defaultColor, defaultColor],
      } as ChestHintOfType<T>;
    case CHEST_HINT_TYPE.mimicDirection:
      return {
        type: hintType,
        params: [defaultDirection],
      } as ChestHintOfType<T>;
    default:
      return { type: hintType, params: [] } as ChestHintOfType<T>;
  }
};

export { getDefaultHint };
