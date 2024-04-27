import { ChestGrid } from "@/types/chestGrid";
import { CHEST_CONTENTS, ChestContents } from "@/types/chestContents";
import { GameInfo } from "@/types/state/gameInfo";
import merge from "deepmerge";
import { SolverChest } from "./solverChest";
import { InternalSolverSolution } from "./internalSolverSolution";
import { Chest } from "@/types/chest";
import { resolveSolution } from "./resolveSolution";
import { mergeSolutions } from "./mergeSolutions";
import { GAME_MODE } from "@/types/gameMode";

interface SolveStandardParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
}

const solveStandard = ({ grid, gameInfo }: SolveStandardParams) => {
  const solutionGrid = merge<ChestGrid>({}, grid);

  // These are the empty chests that the solver will attempt to solve for. It's
  // very important to note that these map DIRECTLY to the chests in the grid
  // (same objects, referential equality - modifying one modifies the other)
  const unknownChests = solutionGrid.rows
    .flat()
    .filter((chest) => chest.contents === CHEST_CONTENTS.unknown);

  // Object that maps individual contents to how many times it has already been
  // defined in the grid.
  const alreadyDefinedContents = grid.rows.flat().reduce(
    (definedContents, chest) => {
      if (typeof chest.contents !== "string") {
        return definedContents;
      }
      return {
        ...definedContents,
        [chest.contents]: (definedContents[chest.contents] ?? 0) + 1,
      };
    },
    {} as { [K in ChestContents]?: number },
  );

  // This will represent all possible types of content that can go in the
  // remaining chests. Each entry in this array will: [ChestContent, number],
  // with the number representing how many are available to fill chests with.
  // The sum of the numbers should equal the number of unknown chests.
  let possibleContents: [ChestContents | ChestContents[], number][] = [
    [
      CHEST_CONTENTS.mimic,
      gameInfo.numMimics - (alreadyDefinedContents[CHEST_CONTENTS.mimic] ?? 0),
    ],
  ];

  // Account for robbers, but only when in the right game mode.
  if (gameInfo.gameMode === GAME_MODE.robbers) {
    possibleContents.push([CHEST_CONTENTS.robber, gameInfo.numRobbers]);
  }

  // The "catch-all" content represents the left-over contents when some of
  // gold, item, or gear numbers are not specified. For example, if none of
  // gold, item, or gear are specified in the gameInfo, any chest that isn't a
  // mimic will just be represented as being [Gold, Item, Gear] (basically an
  // even chance of each)
  const catchAllContent: ChestContents[] = [];

  if (gameInfo.numGold !== undefined && gameInfo.numGold > 0) {
    possibleContents.push([
      CHEST_CONTENTS.gold,
      gameInfo.numGold - (alreadyDefinedContents[CHEST_CONTENTS.gold] ?? 0),
    ]);
  } else if (gameInfo.numGold === undefined) {
    catchAllContent.push(CHEST_CONTENTS.gold);
  }
  if (gameInfo.numGear !== undefined && gameInfo.numGear > 0) {
    possibleContents.push([
      CHEST_CONTENTS.gear,
      gameInfo.numGear - (alreadyDefinedContents[CHEST_CONTENTS.gear] ?? 0),
    ]);
  } else if (gameInfo.numGear === undefined) {
    catchAllContent.push(CHEST_CONTENTS.gear);
  }
  if (gameInfo.numItems !== undefined && gameInfo.numItems > 0) {
    possibleContents.push([
      CHEST_CONTENTS.item,
      gameInfo.numItems - (alreadyDefinedContents[CHEST_CONTENTS.item] ?? 0),
    ]);
  } else if (gameInfo.numItems === undefined) {
    catchAllContent.push(CHEST_CONTENTS.item);
  }

  // Specifically mark "not a mimic" chests and replace their contents with
  // "unknown" so they can be caught by the catch-all contents if needed.
  solutionGrid.rows
    .flat()
    .filter((chest) => chest.contents === CHEST_CONTENTS.not_mimic)
    .forEach((chest) => {
      (chest as SolverChest).isNotMimic = true;
      chest.contents = CHEST_CONTENTS.unknown;
      unknownChests.push(chest);
    });

  possibleContents = possibleContents.filter(([_content, num]) => num >= 1);

  const numCatchAll =
    unknownChests.length - possibleContents.reduce((total, [_content, num]) => total + num, 0);

  if (numCatchAll > 0) {
    possibleContents.push([catchAllContent, numCatchAll]);
  }

  const solution = recursiveSolve({
    grid: solutionGrid,
    gameInfo,
    unknownChests,
    possibleContents,
  });

  return solution;
};

interface RecursiveSolveParams {
  grid: ChestGrid;
  gameInfo: GameInfo;
  unknownChests: Chest[];
  possibleContents: [ChestContents | ChestContents[], number][];
}

/**
 * Uses a recursive pigeon-hole like algorithm to exhaustively find all valid
 * solutions. Given some set of unknown chests, and some equal sized set of
 * possible contents, recursively fills each empty chest with every possible
 * remaining content. Once every chest is full (base case), the solution is
 * checked. If the solution is valid, it's added to the overall set of
 * solutions, and discarded otherwise.
 */
const recursiveSolve = ({
  grid,
  gameInfo,
  unknownChests,
  possibleContents,
}: RecursiveSolveParams) => {
  // The chest to fill on this iteration
  const unknownChest = unknownChests[0];
  // The remaining chests to fill
  const newUnknownChests = unknownChests.slice(1);

  if (possibleContents.length === 0) {
    return resolveSolution({ grid, gameInfo });
  }
  if (unknownChests.length === 0) {
    return null;
  }

  const allSolutions: InternalSolverSolution = new Array(grid.numChests)
    .fill(undefined)
    .map<InternalSolverSolution[number]>(() => new Map());

  // Try to fill the chest with each of the possible types of content left
  possibleContents.forEach((possibleContent, i) => {
    // If this is specified as "Not mimic", skip any contents including a mimic
    if (
      (unknownChest as SolverChest).isNotMimic &&
      possibleContent[0].includes(CHEST_CONTENTS.mimic)
    ) {
      return;
    }
    // The content for the next iteration, with the content about to be used
    // removed.
    let newPossibleContents: [ChestContents | ChestContents[], number][];
    // If it's the last one, dump the entry completely
    if (possibleContent[1] === 1) {
      newPossibleContents = [...possibleContents].toSpliced(i, 1);
    } else {
      // Otherwise just remove one.
      newPossibleContents = [...possibleContents].toSpliced(i, 1, [
        possibleContent[0],
        possibleContent[1] - 1,
      ]);
    }
    // Slap the contents in the chest. It's important to note that this is
    // directly modifying the contents of the underlying grid!!!
    unknownChest.contents = possibleContent[0];

    const solution = recursiveSolve({
      grid,
      gameInfo,
      unknownChests: newUnknownChests,
      possibleContents: newPossibleContents,
    });
    if (solution !== null) {
      mergeSolutions(allSolutions, solution);
    }
  });
  return allSolutions;
};

export { solveStandard };
