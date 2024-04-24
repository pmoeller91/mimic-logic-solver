import { Chest } from '@/types/chest';
import { ChestGrid } from '@/types/chestGrid';
import { CHEST_HINT_TYPE } from '@/types/chestHint';
import { GameInfo } from '@/types/state/gameInfo';
import { resolveColorMoreMimics } from './hint-resolvers/resolveColorMoreMimics';
import { chestHasHint } from '../util/chest/chestHasHint';
import { resolveDirectionMimic } from './hint-resolvers/resolveDirectionMimic';
import { resolveColorGold } from './hint-resolvers/resolveColorGold';
import { resolveColorMimic } from './hint-resolvers/resolveColorMimic';
import { resolveColorNoGold } from './hint-resolvers/resolveColorNoGold';
import { resolveColorNoMimic } from './hint-resolvers/resolveColorNoMimic';
import { resolveDirectionGold } from './hint-resolvers/resolveDirectionGold';
import { resolveDirectionNotGold } from './hint-resolvers/resolveDirectionNotGold';
import { resolveDirectionNotMimic } from './hint-resolvers/resolveDirectionNotMimic';
import { resolveMimicsNeighbors } from './hint-resolvers/resolveMimicsNeighbors';
import { resolveMimicsNotNeighbors } from './hint-resolvers/resolveMimicsNotNeighbors';
import { resolveMimicsNotSameColor } from './hint-resolvers/resolveMimicsNotSameColor';
import { resolveMimicsSameColor } from './hint-resolvers/resolveMimicsSameColor';
import { resolveRankGold } from './hint-resolvers/resolveRankGold';
import { resolveRankMimic } from './hint-resolvers/resolveRankMimic';
import { resolveRankMoreMimics } from './hint-resolvers/resolveRankMoreMimics';
import { resolveRankNoGold } from './hint-resolvers/resolveRankNoGold';
import { resolveRankNoMimic } from './hint-resolvers/resolveRankNoMimic';
import { resolveRankSameMimics } from './hint-resolvers/resolveRankSameMimics';
import { resolveColorNumMimics } from './hint-resolvers/resolveColorNumMimics';
import { resolveColorSameMimics } from './hint-resolvers/resolveColorSameMimics';
import { resolveMimicsNumber } from './hint-resolvers/resolveMimicsNumber';

interface ResolveHintParams {
  grid: ChestGrid;
  chest: Chest;
  gameInfo: GameInfo;
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
const resolveHint = ({ grid, chest, gameInfo }: ResolveHintParams): boolean => {
  switch (true) {
    case chestHasHint(chest, CHEST_HINT_TYPE.selfAsleep):
      return true;
    case chestHasHint(chest, CHEST_HINT_TYPE.selfNotMimic):
      return true;

    case chestHasHint(chest, CHEST_HINT_TYPE.colorGold):
      return resolveColorGold({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorMimic):
      return resolveColorMimic({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorMoreMimics):
      return resolveColorMoreMimics({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorNoGold):
      return resolveColorNoGold({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorNoMimic):
      return resolveColorNoMimic({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorNumMimics):
      return resolveColorNumMimics({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorSameMimics):
      return resolveColorSameMimics({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionGold):
      return resolveDirectionGold({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionMimic):
      return resolveDirectionMimic({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionNotGold):
      return resolveDirectionNotGold({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionNotMimic):
      return resolveDirectionNotMimic({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNeighbors):
      return resolveMimicsNeighbors({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNotNeighbors):
      return resolveMimicsNotNeighbors({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNotSameColor):
      return resolveMimicsNotSameColor({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNumber):
      return resolveMimicsNumber({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsSameColor):
      return resolveMimicsSameColor({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankGold):
      return resolveRankGold({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankMimic):
      return resolveRankMimic({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankMoreMimics):
      return resolveRankMoreMimics({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankNoGold):
      return resolveRankNoGold({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankNoMimic):
      return resolveRankNoMimic({ chest, grid, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankSameMimics):
      return resolveRankSameMimics({ chest, grid, gameInfo });
    default:
      return false;
  }
};

export { resolveHint };
