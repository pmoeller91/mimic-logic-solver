import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { ChestHint, ChestHintBase, ChestHintType, HintParameterTypes } from "@/types/chestHint";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { ChestContents } from "@/types/chestContents";
import { chestContentIs } from "@/util/chest/chestContentIs";
import { chestExcludeContents } from "@/util/chest/chestExcludeContents";

type ColorHint = ChestHint & ChestHintBase<ChestHintType, HintParameterTypes["color"], never>;

function resolveColorContents<C extends ChestContents, T extends ColorHint>({
  targetContents,
  notContents,
}: {
  targetContents: C;
  notContents?: boolean;
}) {
  const resolveColorTargetContents: HintResolver<T> = ({
    grid,
    chest,
    gameInfo,
  }: HintResolverParams<T>) => {
    const isTruthful = getIsTruthful({ chest, grid, gameInfo });
    const chestColor = chest.hint.params[0];

    const coloredChests = grid.rows.flat().filter((chest) => chest.color === chestColor);

    const coloredChestsWithTargetContents = coloredChests.filter((coloredChest) =>
      chestContentIncludes({ chest: coloredChest, contents: targetContents }),
    );

    const coloredChestsAreTargetContents = coloredChests.filter((coloredChest) =>
      chestContentIs({ chest: coloredChest, contents: targetContents }),
    );

    if (notContents) {
      if (isTruthful && coloredChestsAreTargetContents.length === 0) {
        coloredChestsWithTargetContents.forEach((coloredChest) =>
          chestExcludeContents({ chest: coloredChest, contents: targetContents }),
        );
        return true;
      }
      if (!isTruthful && coloredChestsWithTargetContents.length >= 1) {
        if (coloredChestsWithTargetContents.length === 1) {
          coloredChestsWithTargetContents[0].contents = targetContents;
        }
        return true;
      }
    } else {
      if (isTruthful && coloredChestsWithTargetContents.length >= 1) {
        if (coloredChestsWithTargetContents.length === 1) {
          coloredChestsWithTargetContents[0].contents = targetContents;
        }
        return true;
      }
      if (!isTruthful && coloredChestsAreTargetContents.length === 0) {
        coloredChestsWithTargetContents.forEach((coloredChest) =>
          chestExcludeContents({ chest: coloredChest, contents: targetContents }),
        );
        return true;
      }
    }

    return false;
  };
  return resolveColorTargetContents;
}

export { resolveColorContents };
