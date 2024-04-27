import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { ChestHints } from "@/types/chestHint";

const resolveMimicsNumber: HintResolver<ChestHints["MimicsNumber"]> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHints["MimicsNumber"]>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const mimicsAmount = chest.hint.params[0];
  const numMimics = grid.rows
    .flat()
    .filter((chest) => chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic })).length;

  const hintTrue = mimicsAmount === numMimics;

  return hintTrue === isTruthful;
};

export { resolveMimicsNumber };
