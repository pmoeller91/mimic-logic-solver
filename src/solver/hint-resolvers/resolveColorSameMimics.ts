import { HintResolver, HintResolverParams } from './hintResolverTypes';
import { getIsTruthful } from './getIsTruthful';
import { ChestHintTypes } from '@/types/chestHint';
import { chestContentIs } from '@/util/chest/chestContentIs';
import { CHEST_CONTENTS } from '@/types/chestProperties';

const resolveColorSameMimics: HintResolver<ChestHintTypes['colorSameMimics']> = ({
  grid,
  chest,
  gameInfo,
}: HintResolverParams<ChestHintTypes['colorSameMimics']>) => {
  const isTruthful = getIsTruthful({ chest, grid, gameInfo });
  const [colorOne, colorTwo] = chest.hint.params;

  const flatChests = grid.rows.flat();
  const colorOneChests = flatChests.filter(
    (chest) =>
      chest.color === colorOne &&
      chestContentIs({ chest, contents: CHEST_CONTENTS.mimic })
  );
  const colorTwoChests = flatChests.filter(
    (chest) =>
      chest.color === colorTwo &&
      chestContentIs({ chest, contents: CHEST_CONTENTS.mimic })
  );

  const hintTrue = colorOneChests.length === colorTwoChests.length;

  return hintTrue === isTruthful;
};

export { resolveColorSameMimics };
