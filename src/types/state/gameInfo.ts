import { ValidGridSizes } from "../chestGrid";
import { GameMode } from "../gameMode";

interface GameInfo {
  gameMode: GameMode,
  numMimics: number;
  numChests: ValidGridSizes;
}

export type { GameInfo };
