import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestContents';
import { getNeighborChests } from '@/util/chest-grid/getNeighborChests';

const resolveMimicsNotNeighbors: HintResolver<
  ChestHintTypes['mimicsNotNeighbors']
> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['mimicsNotNeighbors']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const mimicChests = grid.rows
    .flat()
    .filter((chest) =>
      chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic })
    );
  const mimicHasMimicNeighbor = mimicChests.some((mimicChest) =>
    getNeighborChests({ chest: mimicChest, grid }).some((neighborChest) =>
      mimicChests.includes(neighborChest)
    )
  );

  if (isTruthful && !mimicHasMimicNeighbor) {
    return true;
  }
  if (!isTruthful && mimicHasMimicNeighbor) {
    return true;
  }
  return false;
};

export { resolveMimicsNotNeighbors };
