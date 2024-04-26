import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { getAdjacentChest } from '@/util/chest-grid/getAdjacentChest';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestContents';
import { chestContentIs } from '@/util/chest/chestContentIs';
import { chestExcludeContents } from '@/util/chest/chestExcludeContents';

const resolveDirectionGold: HintResolver<ChestHintTypes['directionGold']> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['directionGold']>) => {
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

  if (isTruthful && contentsIncludesGold) {
    adjacentChest.contents = CHEST_CONTENTS.gold;
    return true;
  }
  if (!isTruthful && !contentsIsGold) {
    chestExcludeContents({ chest, contents: CHEST_CONTENTS.gold });
    return true;
  }

  return false;
};

export { resolveDirectionGold };
