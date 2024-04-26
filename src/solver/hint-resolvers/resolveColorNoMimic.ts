import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestContents';

const resolveColorNoMimic: HintResolver<ChestHintTypes['colorNoMimic']> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['colorNoMimic']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const chestColor = chest.hint.params[0];
  const colorChests = grid.rows
    .flat()
    .filter((chest) => chest.color === chestColor);
  const colorChestsWithMimic = colorChests.filter((chest) =>
    chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic })
  );

  if (isTruthful && colorChestsWithMimic.length === 0) {
    return true;
  }
  if (!isTruthful && colorChestsWithMimic.length >= 1) {
    if (colorChestsWithMimic.length === 1) {
      colorChestsWithMimic[0].contents = CHEST_CONTENTS.mimic;
    }
    return true;
  }
  return false;
};

export { resolveColorNoMimic };
