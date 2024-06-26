import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { ChestHints } from "@/types/chestHint";
import { getRankChests } from "@/util/chest-grid/getRankChests";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { CHEST_CONTENTS } from "@/types/chestContents";

const resolveRankMoreMimics: HintResolver<ChestHints["RankMoreMimics"]> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHints["RankMoreMimics"]>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const [rankOne, rankTwo] = chest.hint.params;
  const rankOneChests = getRankChests({ grid, rank: rankOne });
  const rankTwoChests = getRankChests({ grid, rank: rankTwo });

  const rankOneMimicChests = rankOneChests.filter((chest) =>
    chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic }),
  );
  const rankTwoMimicChests = rankTwoChests.filter((chest) =>
    chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic }),
  );

  if (isTruthful && rankOneMimicChests.length > rankTwoMimicChests.length) {
    return true;
  }
  if (!isTruthful && rankOneMimicChests.length <= rankTwoMimicChests.length) {
    return true;
  }
  return false;
};

export { resolveRankMoreMimics };
