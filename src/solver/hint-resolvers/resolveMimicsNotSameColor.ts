import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { ChestHints } from "@/types/chestHint";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { CHEST_CONTENTS } from "@/types/chestContents";

const resolveMimicsNotSameColor: HintResolver<ChestHints["MimicsNotSameColor"]> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHints["MimicsNotSameColor"]>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const mimicChests = grid.rows
    .flat()
    .filter((chest) => chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic }));
  const allMimicsSameColor = mimicChests.every(
    (mimicChest) => mimicChest.color === mimicChests[0].color,
  );

  if (isTruthful && !allMimicsSameColor) {
    return true;
  }
  if (!isTruthful && allMimicsSameColor) {
    return true;
  }
  return false;
};

export { resolveMimicsNotSameColor };
