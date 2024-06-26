import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { chestContentIncludes } from "@/util/chest/chestContentIncludes";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { CHEST_COLOR } from "@/types/chestColor";
import { ChestHints } from "@/types/chestHint";

const resolveColorMoreMimics: HintResolver<ChestHints["ColorMoreMimics"]> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHints["ColorMoreMimics"]>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });

  const numMimicsByColor = grid.rows
    .flat()
    .filter((chest) => chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic }))
    .reduce(
      (mimicsByColor, mimicChest) => ({
        ...mimicsByColor,
        [mimicChest.color]: mimicsByColor[mimicChest.color] + 1,
      }),
      {
        [CHEST_COLOR.red]: 0,
        [CHEST_COLOR.black]: 0,
        [CHEST_COLOR.blue]: 0,
      },
    );
  const hintTrue = numMimicsByColor[chest.hint.params[0]] > numMimicsByColor[chest.hint.params[1]];
  return isTruthful === hintTrue;
};

export { resolveColorMoreMimics };
