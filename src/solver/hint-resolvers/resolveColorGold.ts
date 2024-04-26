import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { CHEST_CONTENTS } from '@/types/chestContents';
import { chestContentIs } from '@/util/chest/chestContentIs';
import { chestExcludeContents } from '@/util/chest/chestExcludeContents';

const resolveColorGold: HintResolver<ChestHintTypes['colorGold']> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['colorGold']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const chestColor = chest.hint.params[0];
  const coloredChests = grid.rows
    .flat()
    .filter((chest) => chest.color === chestColor);
  const coloredChestsWithGold = coloredChests.filter((chest) =>
    chestContentIncludes({ chest, contents: CHEST_CONTENTS.gold })
  );
  const coloredChestsAreGold = coloredChests.filter((chest) =>
    chestContentIs({ chest, contents: CHEST_CONTENTS.gold })
  );
  if (isTruthful && coloredChestsWithGold.length >= 1) {
    if (coloredChestsWithGold.length === 1) {
      coloredChestsWithGold[0].contents = CHEST_CONTENTS.gold;
    }
    return true;
  }
  if (!isTruthful && coloredChestsAreGold.length === 0) {
    coloredChestsWithGold.forEach((chest) =>
      chestExcludeContents({ chest, contents: CHEST_CONTENTS.gold })
    );
    return true;
  }
  return false;
};

export { resolveColorGold };
