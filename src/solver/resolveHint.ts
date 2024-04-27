import { Chest } from "@/types/chest";
import { ChestGrid } from "@/types/chestGrid";
import { CHEST_HINT_TYPE, ChestHintOfType, ChestHintType } from "@/types/chestHint";
import { GameInfo } from "@/types/state/gameInfo";
import { resolveColorMoreMimics } from "./hint-resolvers/resolveColorMoreMimics";
import { chestHasHint } from "../util/chest/chestHasHint";
import { resolveMimicsNeighbors } from "./hint-resolvers/resolveMimicsNeighbors";
import { resolveMimicsNotNeighbors } from "./hint-resolvers/resolveMimicsNotNeighbors";
import { resolveMimicsNotSameColor } from "./hint-resolvers/resolveMimicsNotSameColor";
import { resolveMimicsSameColor } from "./hint-resolvers/resolveMimicsSameColor";
import { resolveRankMoreMimics } from "./hint-resolvers/resolveRankMoreMimics";
import { resolveRankSameMimics } from "./hint-resolvers/resolveRankSameMimics";
import { resolveColorNumMimics } from "./hint-resolvers/resolveColorNumMimics";
import { resolveColorSameMimics } from "./hint-resolvers/resolveColorSameMimics";
import { resolveMimicsNumber } from "./hint-resolvers/resolveMimicsNumber";
import { resolveNumber } from "./hint-resolvers/resolveNumber";
import { resolveDirectionContents } from "./hint-resolvers/resolveDirectionContents";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { resolveColorContents } from "./hint-resolvers/resolveColorContents";
import { resolveRankContents } from "./hint-resolvers/resolveRankContents";
import { HintResolver } from "./hint-resolvers/hintResolverTypes";

interface ResolveHintParams {
  grid: ChestGrid;
  chest: Chest;
  gameInfo: GameInfo;
}

type HintResolvers = {
  [key in ChestHintType]: HintResolver<ChestHintOfType<key>>;
};

const hintResolvers: HintResolvers = {
  [CHEST_HINT_TYPE.__error]: () => false,
  [CHEST_HINT_TYPE.colorGold]: resolveColorContents({ targetContents: CHEST_CONTENTS.gold }),
  [CHEST_HINT_TYPE.colorMimic]: resolveColorContents({ targetContents: CHEST_CONTENTS.mimic }),
  [CHEST_HINT_TYPE.colorMoreMimics]: resolveColorMoreMimics,
  [CHEST_HINT_TYPE.colorNoGold]: resolveColorContents({
    targetContents: CHEST_CONTENTS.gold,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.colorNoMimic]: resolveColorContents({
    targetContents: CHEST_CONTENTS.mimic,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.colorNoRobber]: resolveColorContents({
    targetContents: CHEST_CONTENTS.robber,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.colorNumMimics]: resolveColorNumMimics,
  [CHEST_HINT_TYPE.colorRobber]: resolveColorContents({ targetContents: CHEST_CONTENTS.robber }),
  [CHEST_HINT_TYPE.colorSameMimics]: resolveColorSameMimics,
  [CHEST_HINT_TYPE.directionGold]: resolveDirectionContents({
    targetContents: CHEST_CONTENTS.gold,
  }),
  [CHEST_HINT_TYPE.directionMimic]: resolveDirectionContents({
    targetContents: CHEST_CONTENTS.mimic,
  }),
  [CHEST_HINT_TYPE.directionNoRobber]: resolveDirectionContents({
    targetContents: CHEST_CONTENTS.robber,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.directionNotGold]: resolveDirectionContents({
    targetContents: CHEST_CONTENTS.gold,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.directionNotMimic]: resolveDirectionContents({
    targetContents: CHEST_CONTENTS.mimic,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.directionRobber]: resolveDirectionContents({
    targetContents: CHEST_CONTENTS.robber,
  }),
  [CHEST_HINT_TYPE.mimicsNeighbors]: resolveMimicsNeighbors,
  [CHEST_HINT_TYPE.mimicsNotNeighbors]: resolveMimicsNotNeighbors,
  [CHEST_HINT_TYPE.mimicsNotSameColor]: resolveMimicsNotSameColor,
  [CHEST_HINT_TYPE.mimicsNumber]: resolveMimicsNumber,
  [CHEST_HINT_TYPE.mimicsSameColor]: resolveMimicsSameColor,
  [CHEST_HINT_TYPE.number]: resolveNumber,
  [CHEST_HINT_TYPE.rankGold]: resolveRankContents({ targetContents: CHEST_CONTENTS.gold }),
  [CHEST_HINT_TYPE.rankMimic]: resolveRankContents({ targetContents: CHEST_CONTENTS.mimic }),
  [CHEST_HINT_TYPE.rankMoreMimics]: resolveRankMoreMimics,
  [CHEST_HINT_TYPE.rankNoGold]: resolveRankContents({
    targetContents: CHEST_CONTENTS.gold,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.rankNoMimic]: resolveRankContents({
    targetContents: CHEST_CONTENTS.mimic,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.rankNoRobber]: resolveRankContents({
    targetContents: CHEST_CONTENTS.robber,
    notContents: true,
  }),
  [CHEST_HINT_TYPE.rankRobber]: resolveRankContents({ targetContents: CHEST_CONTENTS.robber }),
  [CHEST_HINT_TYPE.rankSameMimics]: resolveRankSameMimics,
  [CHEST_HINT_TYPE.selfAsleep]: () => true,
  [CHEST_HINT_TYPE.selfNotMimic]: () => true,
};

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
    case chestHasHint(chest, CHEST_HINT_TYPE.__error):
      return hintResolvers[CHEST_HINT_TYPE.__error]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorGold):
      return hintResolvers[CHEST_HINT_TYPE.colorGold]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorMimic):
      return hintResolvers[CHEST_HINT_TYPE.colorMimic]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorMoreMimics):
      return hintResolvers[CHEST_HINT_TYPE.colorMoreMimics]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorNoGold):
      return hintResolvers[CHEST_HINT_TYPE.colorNoGold]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorNoMimic):
      return hintResolvers[CHEST_HINT_TYPE.colorNoMimic]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorNoRobber):
      return hintResolvers[CHEST_HINT_TYPE.colorNoRobber]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorNumMimics):
      return hintResolvers[CHEST_HINT_TYPE.colorNumMimics]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorRobber):
      return hintResolvers[CHEST_HINT_TYPE.colorRobber]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.colorSameMimics):
      return hintResolvers[CHEST_HINT_TYPE.colorSameMimics]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionGold):
      return hintResolvers[CHEST_HINT_TYPE.directionGold]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionMimic):
      return hintResolvers[CHEST_HINT_TYPE.directionMimic]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionNoRobber):
      return hintResolvers[CHEST_HINT_TYPE.directionNoRobber]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionNotGold):
      return hintResolvers[CHEST_HINT_TYPE.directionNotGold]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionNotMimic):
      return hintResolvers[CHEST_HINT_TYPE.directionNotMimic]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.directionRobber):
      return hintResolvers[CHEST_HINT_TYPE.directionRobber]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNeighbors):
      return hintResolvers[CHEST_HINT_TYPE.mimicsNeighbors]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNotNeighbors):
      return hintResolvers[CHEST_HINT_TYPE.mimicsNotNeighbors]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNotSameColor):
      return hintResolvers[CHEST_HINT_TYPE.mimicsNotSameColor]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsNumber):
      return hintResolvers[CHEST_HINT_TYPE.mimicsNumber]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.mimicsSameColor):
      return hintResolvers[CHEST_HINT_TYPE.mimicsSameColor]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.number):
      return hintResolvers[CHEST_HINT_TYPE.number]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankGold):
      return hintResolvers[CHEST_HINT_TYPE.rankGold]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankMimic):
      return hintResolvers[CHEST_HINT_TYPE.rankMimic]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankMoreMimics):
      return hintResolvers[CHEST_HINT_TYPE.rankMoreMimics]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankNoGold):
      return hintResolvers[CHEST_HINT_TYPE.rankNoGold]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankNoMimic):
      return hintResolvers[CHEST_HINT_TYPE.rankNoMimic]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankNoRobber):
      return hintResolvers[CHEST_HINT_TYPE.rankNoRobber]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankRobber):
      return hintResolvers[CHEST_HINT_TYPE.rankRobber]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.rankSameMimics):
      return hintResolvers[CHEST_HINT_TYPE.rankSameMimics]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.selfAsleep):
      return hintResolvers[CHEST_HINT_TYPE.selfAsleep]({ grid, chest, gameInfo });
    case chestHasHint(chest, CHEST_HINT_TYPE.selfNotMimic):
      return hintResolvers[CHEST_HINT_TYPE.selfNotMimic]({ grid, chest, gameInfo });
    default:
      throw new RangeError("Invalid hint type");
  }
};

export { resolveHint };
