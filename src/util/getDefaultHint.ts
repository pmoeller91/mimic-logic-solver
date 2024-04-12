import {
  CHEST_DIRECTION,
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
    case 'ASLEEP':
    case 'MIMIC_NOT_SELF':
    case 'UNKNOWN':
      return { type: hintType, params: [] } as ChestHintOfType<T>;
    case 'COLOR_MORE_MIMICS':
      return {
        type: hintType,
        params: [defaultColor, defaultColor],
      } as ChestHintOfType<T>;
    case 'MIMIC_DIRECTION':
      return {
        type: hintType,
        params: [defaultDirection],
      } as ChestHintOfType<T>;
    default:
      return { type: hintType, params: [] } as ChestHintOfType<T>;
  }
};

export { getDefaultHint };
