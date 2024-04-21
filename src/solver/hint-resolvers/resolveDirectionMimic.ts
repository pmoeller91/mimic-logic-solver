import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { getAdjacentChest } from '@/util/chest-grid/getAdjacentChest';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestProperties';

const resolveDirectionMimic: HintResolver<ChestHintTypes['directionMimic']> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['directionMimic']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });

  const adjacentChest = getAdjacentChest({
    grid,
    chest,
    direction: chest.hint.params[0],
  });
  if (!adjacentChest) {
    return false;
  }

  const hintTrue = chestContentIncludes({
    chest: adjacentChest,
    contents: CHEST_CONTENTS.mimic,
  });

  if (hintTrue && isTruthful) {
    // limit adjacent chest to only mimic if this hint is true
    adjacentChest.contents = CHEST_CONTENTS.mimic;
  }

  // valid hint if it's true and we tell the truth, or if it's false and we lie
  return hintTrue === isTruthful;
};

export { resolveDirectionMimic };
