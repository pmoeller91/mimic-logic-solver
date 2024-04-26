import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { getAdjacentChest } from '@/util/chest-grid/getAdjacentChest';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestContents';

const resolveDirectionNotMimic: HintResolver<
  ChestHintTypes['directionNotMimic']
> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['directionNotMimic']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const direction = chest.hint.params[0];
  const adjacentChest = getAdjacentChest({ chest, grid, direction });
  if (!adjacentChest) {
    return false;
  }

  const adjacentContainsMimic = chestContentIncludes({
    chest: adjacentChest,
    contents: CHEST_CONTENTS.mimic,
  });

  if (isTruthful && !adjacentContainsMimic) {
    return true;
  }
  if (!isTruthful && adjacentContainsMimic) {
    adjacentChest.contents = CHEST_CONTENTS.mimic;
    return true;
  }
  return false;
};

export { resolveDirectionNotMimic };
