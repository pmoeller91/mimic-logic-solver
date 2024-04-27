import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { ChestHints } from "@/types/chestHint";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { getSurroundingChests } from "@/util/chest-grid/getSurroundingChests";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";

const resolveNumber: HintResolver<ChestHints["Number"]> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHints["Number"]>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const mimicsAmount = chest.hint.params[0];
  const numMimics = getSurroundingChests({ chest, grid }).filter((chest) =>
    chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic }),
  ).length;

  const hintTrue = mimicsAmount === numMimics;

  return hintTrue === isTruthful;
};

export { resolveNumber };
