import { Chest } from '@/types/chest';
import { ChestGrid } from '@/types/chestGrid';
import { CHEST_COLOR, CHEST_CONTENTS } from '@/types/chestProperties';
import { chestContentIncludes } from '@/util/chest/chestContentIncludes';
import { getAdjacentChest } from '@/util/chest-grid/getAdjacentChest';
import { CHEST_HINT_TYPE } from '@/types/chestHint';

interface ResolveHintParams {
  grid: ChestGrid;
  chest: Chest;
}

/**
 * Check if the hint for a given chest in the grid is valid.
 *
 * A hint is valid if:
 * - The hint is TRUE and the chest TELLS THE TRUTH
 *  - For example, any non-mimic in standard mode always tells the truth
 * - The hint is FALSE and the chest LIES
 *  - For example, a mimic in standard mode always lies
 * 
 * If the hint can be valid but requires that a particular chest must fulfill
 * some criteria, this function will also pare down the contents of that chest
 * as needed. For example, given:
 *  - HINT: The chest below me contains gold
 *  - The chest giving the hint tells the truth
 *  - The chest below can contain gold (say it contains currently any of [Gold, Item, Gear])
 *  - Given this, the chest below will be updated to contain ONLY gold
 * 
 *  This narrowing will help prevent contradictory hints from slipping through. For
 *  example, if one hint says a chest must contain gold, and the other says it
 *  must contain an item, then they can never both be correct. Without the
 *  narrowing this would be missed in cases where the chest contains multiple
 *  possible items.
 */
const resolveHint = ({ grid, chest }: ResolveHintParams): boolean => {
  const isLiar = chestContentIncludes({
    chest,
    contents: CHEST_CONTENTS.mimic,
  });
  switch (chest.hint.type) {
    case CHEST_HINT_TYPE.asleep:
      return true;
    case CHEST_HINT_TYPE.unknown:
      return false;
    case CHEST_HINT_TYPE.mimicNotSelf:
      return true;
    case CHEST_HINT_TYPE.colorMoreMimics: {
      const numMimicsByColor = grid.rows
        .flat()
        .filter((chest) =>
          chestContentIncludes({ chest, contents: CHEST_CONTENTS.mimic })
        )
        .reduce(
          (mimicsByColor, chest) => ({
            ...mimicsByColor,
            [chest.color]: mimicsByColor[chest.color] + 1,
          }),
          {
            [CHEST_COLOR.red]: 0,
            [CHEST_COLOR.black]: 0,
            [CHEST_COLOR.blue]: 0,
          }
        );
      const hintTrue =
        numMimicsByColor[chest.hint.params[0]] >
        numMimicsByColor[chest.hint.params[1]];
      return isLiar ? !hintTrue : hintTrue;
    }
    case CHEST_HINT_TYPE.mimicDirection:
      {
        const adjacentChest = getAdjacentChest({
          grid,
          chest,
          direction: chest.hint.params[0],
        });
        if (!adjacentChest) {
          return false;
        }
        const hintTrue = chestContentIncludes({
          chest: adjacentChest,
          contents: CHEST_CONTENTS.mimic,
        });
        if (hintTrue && !isLiar) {
          adjacentChest.contents = CHEST_CONTENTS.mimic;
          return true;
        }
        if (hintTrue && isLiar) {
          return false;
        }
        if (!hintTrue && !isLiar) {
          return false;
        }
        if (!hintTrue && isLiar) {
          return true;
        }
      }
      break;
    default:
      return false;
  }

  return false;
};

export { resolveHint };
