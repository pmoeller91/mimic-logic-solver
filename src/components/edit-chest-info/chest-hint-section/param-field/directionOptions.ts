import { CHEST_DIRECTION, ChestDirection } from "@/types/chestHint";

const directionOptions: ChestDirection[] = [
  CHEST_DIRECTION.up,
  CHEST_DIRECTION.upRight,
  CHEST_DIRECTION.right,
  CHEST_DIRECTION.downRight,
  CHEST_DIRECTION.down,
  CHEST_DIRECTION.downLeft,
  CHEST_DIRECTION.left,
  CHEST_DIRECTION.upLeft,
];

export { directionOptions };
