import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { ChestHint, ChestHintBase, ChestHintType, HintParameterTypes } from "@/types/chestHint";
import { getAdjacentChest } from "@/util/chest-grid/getAdjacentChest";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { ChestContents } from "@/types/chestContents";
import { chestContentIs } from "@/util/chest/chestContentIs";
import { chestExcludeContents } from "@/util/chest/chestExcludeContents";

type DirectionHint = ChestHint &
  ChestHintBase<ChestHintType, HintParameterTypes["direction"], never>;

function resolveDirectionContents<C extends ChestContents, T extends DirectionHint>({
  targetContents,
  notContents,
}: {
  targetContents: C;
  notContents?: boolean;
}) {
  const resolveDirectionTargetContents: HintResolver<T> = ({
    grid,
    chest,
    gameInfo,
  }: HintResolverParams<T>) => {
    const isTruthful = getIsTruthful({ chest, grid, gameInfo });
    const direction = chest.hint.params[0];

    const adjacentChest = getAdjacentChest({ grid, chest, direction });
    if (!adjacentChest) {
      return false;
    }

    const contentsIsTargetContents = chestContentIs({
      chest: adjacentChest,
      contents: targetContents,
    });

    const contentsIncludesTargetContents = chestContentIncludes({
      chest: adjacentChest,
      contents: targetContents,
    });

    if (notContents) {
      if (isTruthful && !contentsIsTargetContents) {
        chestExcludeContents({ chest: adjacentChest, contents: targetContents });
        return true;
      }
      if (!isTruthful && contentsIncludesTargetContents) {
        adjacentChest.contents = targetContents;
        return true;
      }
    } else {
      if (isTruthful && contentsIncludesTargetContents) {
        adjacentChest.contents = targetContents;
        return true;
      }
      if (!isTruthful && !contentsIsTargetContents) {
        chestExcludeContents({ chest, contents: targetContents });
        return true;
      }
    }

    return false;
  };
  return resolveDirectionTargetContents;
}

export { resolveDirectionContents };
