import { ChestColor, ChestContents } from './chestProperties';
import { ChestHint } from './chestHint';

interface Chest {
  hint?: ChestHint;
  contents?: ChestContents;
  color: ChestColor;
}

export type { Chest };
