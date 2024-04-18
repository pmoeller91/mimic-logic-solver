import { Chest } from '@/types/chest';
import { SolverSolution } from '@/types/solverMessage';
import { forwardRef } from 'react';
import { SolutionTileView } from './SolutionTileView';
import { getGameTranslation } from '@/util/getGameTranslation';
import { TRANSLATION_TYPE } from '@/types/translation';
import { useTranslation } from 'react-i18next';
import { CHEST_CONTENTS, ChestContents } from '@/types/chestProperties';

interface SolutionTileContainerProps {
  contextLabel: string;
  chestSolution: SolverSolution[number];
  chest: Chest;
  className?: string;
}

const SolutionTileContainer = forwardRef<
  HTMLDivElement,
  SolutionTileContainerProps
>(function SolutionTileContainer(
  { chestSolution, className, chest, contextLabel },
  ref
) {
  const { t } = useTranslation();
  const chestHint = getGameTranslation({
    type: TRANSLATION_TYPE.chestHint,
    key: chest.hint,
    t,
  });
  const iconAltText = t('chestTile.iconAltText', { color: chest.color });

  // How many total, different valid solutions were found
  const totalSolutions = chestSolution.reduce(
    (total, solution) => total + solution[1],
    0
  );

  // For solutions that contain multiple possibilities for the chest, weight
  // each possibility by how many different possibilities there are. Ex if the
  // contents is [item, gold] then weight by 0.5
  const weightedSolutions = chestSolution.map(
    ([contents, amount]) =>
      [contents, amount / contents.length] as [ChestContents[], number]
  );

  // For solutions with multiple possibilities, convert from [[content1,
  // content2], weight] to [content1, weight], [content2, weight].
  const splitSolutions = weightedSolutions.flatMap(
    ([contents, weightedAmount]) =>
      contents.map(
        (content) => [content, weightedAmount] as [ChestContents, number]
      )
  );

  // Sum all solutions with the same content, resulting in an array of unique
  // contents and the resultant combined weight
  const collatedSolutions = Object.entries(
    splitSolutions.reduce((collated, [content, amount]) => {
      collated[content] = (collated[content] ?? 0) + amount;
      return collated;
    }, {} as Record<ChestContents, number>)
  ) as [ChestContents, number][];

  // Divide these based on the total solutions so each represents a ratio of the
  // total solutions
  const percentageSolutions = collatedSolutions.map(
    ([contents, amount]) =>
      [contents, amount / totalSolutions] as [ChestContents, number]
  );

  // Sort the most likely solution first
  percentageSolutions.sort((a, b) => b[1] - a[1]);

  const translatedSolutions = percentageSolutions.map(([content, amount]) => [
    t('solutionTile.contentLabel', { content }),
    t('solutionTile.contentPercent', { amount }),
  ]);

  const mimicSolution = percentageSolutions.find(
    (solution) => solution[0] === CHEST_CONTENTS.mimic
  );

  // If there is a solution with mimic, and it's among the most likely solutions.
  const likelyMimic =
    !!mimicSolution && Math.abs(mimicSolution[1] - percentageSolutions[0][1]) < 0.01;

  return (
    <SolutionTileView
      chestHint={chestHint}
      iconAltText={iconAltText}
      chestColor={chest.color}
      solutions={translatedSolutions}
      className={className}
      contextLabel={contextLabel}
      likelyMimic={likelyMimic}
      ref={ref}
    />
  );
});

export { SolutionTileContainer };
