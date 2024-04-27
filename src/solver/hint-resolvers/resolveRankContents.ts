import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { ChestHint, ChestHintBase, ChestHintType, HintParameterTypes } from "@/types/chestHint";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { ChestContents } from "@/types/chestContents";
import { chestContentIs } from "@/util/chest/chestContentIs";
import { chestExcludeContents } from "@/util/chest/chestExcludeContents";
import { getRankChests } from "@/util/chest-grid/getRankChests";

type RankHint = ChestHint & ChestHintBase<ChestHintType, HintParameterTypes["rank"], never>;

function resolveRankContents<C extends ChestContents, T extends RankHint>({
  targetContents,
  notContents,
}: {
  targetContents: C;
  notContents?: boolean;
}) {
  const resolveRankTargetContents: HintResolver<T> = ({
    grid,
    chest,
    gameInfo,
  }: HintResolverParams<T>) => {
    const isTruthful = getIsTruthful({ chest, grid, gameInfo });
    const chestRank = chest.hint.params[0];

    const rankChests = getRankChests({ grid, rank: chestRank });

    const rankChestsWithTargetContents = rankChests.filter((rankChest) =>
      chestContentIncludes({ chest: rankChest, contents: targetContents }),
    );

    const rankChestsAreTargetContents = rankChests.filter((rankChest) =>
      chestContentIs({ chest: rankChest, contents: targetContents }),
    );

    if (notContents) {
      if (isTruthful && rankChestsAreTargetContents.length === 0) {
        rankChestsWithTargetContents.forEach((rankChest) =>
          chestExcludeContents({ chest: rankChest, contents: targetContents }),
        );
        return true;
      }
      if (!isTruthful && rankChestsWithTargetContents.length >= 1) {
        if (rankChestsWithTargetContents.length === 1) {
          rankChestsWithTargetContents[0].contents = targetContents;
        }
        return true;
      }
    } else {
      if (isTruthful && rankChestsWithTargetContents.length >= 1) {
        if (rankChestsWithTargetContents.length === 1) {
          rankChestsWithTargetContents[0].contents = targetContents;
        }
        return true;
      }
      if (!isTruthful && rankChestsAreTargetContents.length === 0) {
        rankChestsWithTargetContents.forEach((rankChest) =>
          chestExcludeContents({ chest: rankChest, contents: targetContents }),
        );
        return true;
      }
    }

    return false;
  };
  return resolveRankTargetContents;
}

export { resolveRankContents };
