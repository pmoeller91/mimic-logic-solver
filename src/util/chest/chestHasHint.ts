import { Chest } from '@/types/chest';
import { ChestHintType } from '@/types/chestHint';
import { ChestWithHint } from '../../solver/hint-resolvers/hintResolverTypes';

const chestHasHint = <T extends ChestHintType>(
  chest: Chest,
  hintType: T
): chest is ChestWithHint<T> => {
  return chest.hint.type === hintType;
};

export { chestHasHint };
