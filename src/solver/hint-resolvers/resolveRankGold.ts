import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { getRankChests } from '@/util/chest-grid/getRankChests';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestProperties';
import { chestContentIs } from '@/util/chest/chestContentIs';
import { chestExcludeContents } from '@/util/chest/chestExcludeContents';

const resolveRankGold: HintResolver<
  ChestHintTypes['rankGold']
> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['rankGold']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const rank = chest.hint.params[0];
  const rankChests = getRankChests({ grid, rank });

  const rankChestsIncludingGold = rankChests.filter((rankChest) => chestContentIncludes({ chest: rankChest, contents: CHEST_CONTENTS.gold }));
  const rankChestsAreGold = rankChests.filter((rankChest) => chestContentIs({ chest: rankChest, contents: CHEST_CONTENTS.gold }));

  if (isTruthful && rankChestsIncludingGold.length >= 1) {
    if (rankChestsIncludingGold.length === 1) {
      rankChestsIncludingGold[0].contents = CHEST_CONTENTS.gold;
    }
    return true;
  }
  if (!isTruthful && rankChestsAreGold.length === 0) {
    rankChests.forEach((rankChest) => chestExcludeContents({ chest: rankChest, contents: CHEST_CONTENTS.gold }));
    return true;
  }
  return false;
};

export { resolveRankGold };
