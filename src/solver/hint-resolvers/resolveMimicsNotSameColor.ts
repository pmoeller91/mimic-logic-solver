import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestContents';

const resolveMimicsNotSameColor: HintResolver<
  ChestHintTypes['mimicsNotSameColor']
> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['mimicsNotSameColor']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const mimicChests = grid.rows
    .flat()
    .filter((chest) =>
      chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic })
    );
  const allMimicsSameColor = mimicChests.every(
    (mimicChest) => mimicChest.color === mimicChests[0].color
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
