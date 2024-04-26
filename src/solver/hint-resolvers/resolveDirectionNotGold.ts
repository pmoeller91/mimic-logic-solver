import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { getAdjacentChest } from '@/util/chest-grid/getAdjacentChest';
import { CHEST_CONTENTS } from '@/types/chestContents';
import { chestContentIs } from '@/util/chest/chestContentIs';
import { chestExcludeContents } from '@/util/chest/chestExcludeContents';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';

const resolveDirectionNotGold: HintResolver<
  ChestHintTypes['directionNotGold']
> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['directionNotGold']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const direction = chest.hint.params[0];
  const adjacentChest = getAdjacentChest({ grid, chest, direction });
  if (!adjacentChest) {
    return false;
  }

  const contentsIsGold = chestContentIs({
    chest,
    contents: CHEST_CONTENTS.gold,
  });

  const contentsIncludesGold = chestContentIncludes({
    chest,
    contents: CHEST_CONTENTS.gold,
  });

  if (isTruthful && !contentsIsGold) {
    chestExcludeContents({
      chest: adjacentChest,
      contents: CHEST_CONTENTS.gold,
    });
    return true;
  }
  if (!isTruthful && contentsIncludesGold) {
    adjacentChest.contents = CHEST_CONTENTS.gold;
    return true;
  }

  return false;
};

export { resolveDirectionNotGold };
