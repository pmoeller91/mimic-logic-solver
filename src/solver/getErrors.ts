import { ChestGrid } from '@/types/chestGrid';
import { CHEST_CONTENTS } from '@/types/chestProperties';
import { GameInfo } from '@/types/state/gameInfo';
import { TFunction } from 'i18next';

interface GetErrorsParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

/**
 * Performs a preliminary check on the provided grid and game info to rule out
 * some impossible configurations which would never yield any solution.
 * @returns An array of errors. Empty if no errors found.
 */
const getErrors = ({ grid, gameInfo }: GetErrorsParams) => {
  const errors: Parameters<TFunction>[] = [];
  const { numMimics, numGear, numGold, numItems, numChests } = gameInfo;
  const allChests = grid.rows.flat();
  const totalContentsSpecified =
    gameInfo.numMimics + (numGear ?? 0) + (numGold ?? 0) + (numItems ?? 0);
  if (totalContentsSpecified > numChests) {
    errors.push([
      'solverError.contentsTooMany',
      { numChests: gameInfo.numChests, numSpecified: totalContentsSpecified },
    ]);
  }
  if (
    totalContentsSpecified < numChests &&
    numGear !== undefined &&
    numGold !== undefined &&
    numItems !== undefined
  ) {
    errors.push([
      'solverError.contentsTooFew',
      { numChests: gameInfo.numChests, numSpecified: totalContentsSpecified },
    ]);
  }

  // Totals of chest contents pre-defined in the grid
  const { mimicsSpecified, gearSpecified, goldSpecified, itemsSpecified } =
    allChests
      .map((chest) => chest.contents)
      .reduce(
        (contentsSpecified, content) => {
          if (typeof content !== 'string') {
            return contentsSpecified;
          }
          switch (content) {
            case CHEST_CONTENTS.gear:
              return {
                ...contentsSpecified,
                gearSpecified: contentsSpecified.gearSpecified + 1,
              };
            case CHEST_CONTENTS.gold:
              return {
                ...contentsSpecified,
                goldSpecified: contentsSpecified.goldSpecified + 1,
              };
            case CHEST_CONTENTS.item:
              return {
                ...contentsSpecified,
                itemsSpecified: contentsSpecified.itemsSpecified + 1,
              };
            case CHEST_CONTENTS.mimic:
              return {
                ...contentsSpecified,
                mimicsSpecified: contentsSpecified.mimicsSpecified + 1,
              };
            default:
              return contentsSpecified;
          }
        },
        {
          mimicsSpecified: 0,
          gearSpecified: 0,
          goldSpecified: 0,
          itemsSpecified: 0,
        }
      );

  if (mimicsSpecified > numMimics) {
    errors.push([
      'solverError.specifiedMimicsTooMany',
      { mimicsSpecified, numMimics },
    ]);
  }

  // Total number of "free" chests which are not explicitly defined as any
  // particular content type in the game info.
  const numUnspecified =
    numChests - numMimics - (numGear ?? 0) - (numGold ?? 0) - (numItems ?? 0);

  if (gearSpecified > (numGear ?? numUnspecified)) {
    errors.push([
      'solverError.specifiedGearTooMany',
      { gearSpecified, numGear: numGear ?? numUnspecified },
    ]);
  }
  if (itemsSpecified > (numItems ?? numUnspecified)) {
    errors.push([
      'solverError.specifiedItemsTooMany',
      { itemsSpecified, numItems: numItems ?? numUnspecified },
    ]);
  }
  if (goldSpecified > (numGold ?? numUnspecified)) {
    errors.push([
      'solverError.specifiedGoldTooMany',
      { goldSpecified, numGold: numGold ?? numUnspecified },
    ]);
  }

  return errors;
};

export { getErrors };
