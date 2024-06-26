import { ChestContents } from "./chestContents";
import { ChestColor } from "./chestColor";
import { ChestHint } from "./chestHint";

interface Chest {
  hint: ChestHint;
  contents: ChestContents | ChestContents[];
  color: ChestColor;
  isConfused?: boolean;
}

export type { Chest };
