import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { CHEST_CONTENTS } from '@/types/chestProperties';
import { chestContentIs } from '@/util/chest/chestContentIs';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { chestExcludeContents } from '@/util/chest/chestExcludeContents';

const resolveColorNoGold: HintResolver<ChestHintTypes['colorNoGold']> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['colorNoGold']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const chestColor = chest.hint.params[0];
  const coloredChests = grid.rows
    .flat()
    .filter((chest) => chest.color === chestColor);
  const coloredChestsAreGold = coloredChests.filter((chest) =>
    chestContentIs({ chest, contents: CHEST_CONTENTS.gold })
  );
  const coloredChestsWithGold = coloredChests.filter((chest) =>
    chestContentIncludes({ chest, contents: CHEST_CONTENTS.gold })
  );

  if (isTruthful && coloredChestsAreGold.length === 0) {
    coloredChestsWithGold.forEach((chest) =>
      chestExcludeContents({ chest, contents: CHEST_CONTENTS.gold })
    );
    return true;
  }
  if (!isTruthful && coloredChestsWithGold.length >= 1) {
    if (coloredChestsWithGold.length === 1) {
      coloredChestsWithGold[0].contents = CHEST_CONTENTS.gold;
    }
    return true;
  }
  return false;
};

export { resolveColorNoGold };
