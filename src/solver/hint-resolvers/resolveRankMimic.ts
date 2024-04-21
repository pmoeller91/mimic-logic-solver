import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { getRankChests } from '@/util/chest-grid/getRankChests';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestProperties';
import { chestContentIs } from '@/util/chest/chestContentIs';
import { chestExcludeContents } from '@/util/chest/chestExcludeContents';

const resolveRankMimic: HintResolver<
  ChestHintTypes['rankMimic']
> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['rankMimic']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const rank = chest.hint.params[0];
  const rankChests = getRankChests({ grid, rank });

  const rankChestsIncludingMimic = rankChests.filter((rankChest) => chestContentIncludes({ chest: rankChest, contents: CHEST_CONTENTS.mimic }));
  const rankChestsAreMimic = rankChests.filter((rankChest) => chestContentIs({ chest: rankChest, contents: CHEST_CONTENTS.mimic }));

  if (isTruthful && rankChestsIncludingMimic.length >= 1) {
    if (rankChestsIncludingMimic.length === 1) {
      rankChestsIncludingMimic[0].contents = CHEST_CONTENTS.mimic;
    }
    return true;
  }
  if (!isTruthful && rankChestsAreMimic.length === 0) {
    rankChests.forEach((rankChest) => chestExcludeContents({ chest: rankChest, contents: CHEST_CONTENTS.mimic }));
    return true;
  }
  return false;
};

export { resolveRankMimic };
