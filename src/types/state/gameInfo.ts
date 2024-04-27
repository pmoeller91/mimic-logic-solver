import { ValidGridSizes } from "../chestGrid";
import { GameMode } from "../gameMode";

interface GameInfo {
  gameMode: GameMode,
  numMimics: number;
  numRobbers: number;
  numItems?: number;
  numGear?: number;
  numGold?: number;
  numChests: ValidGridSizes;
}

export type { GameInfo };
