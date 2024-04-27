import { HintResolver, HintResolverParams } from "./hintResolverTypes";
import { getIsTruthful } from "./getIsTruthful";
import { ChestHints } from "@/types/chestHint";
import { chestContentIs } from "@/util/chest/chestContentIs";
import { CHEST_CONTENTS } from "@/types/chestContents";

const resolveColorNumMimics: HintResolver<ChestHints["ColorNumMimics"]> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHints["ColorNumMimics"]>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const chestColor = chest.hint.params[1];
  const numMimics = chest.hint.params[0];

  const colorChests = grid.rows.flat().filter((chest) => chest.color === chestColor);
  const colorChestsExclusivelyMimic = colorChests.filter((chest) =>
    chestContentIs({ chest, contents: CHEST_CONTENTS.mimic }),
  );

  const hintTrue = numMimics === colorChestsExclusivelyMimic.length;

  return hintTrue === isTruthful;
};

export { resolveColorNumMimics };
