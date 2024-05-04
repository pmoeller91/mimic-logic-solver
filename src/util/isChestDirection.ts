import { CHEST_DIRECTION, ChestDirection, ChestHint } from "@/types/chestHint";

const isChestDirection = (
  chestDirection: ChestHint["params"][number],
): chestDirection is ChestDirection =>
  Object.values(CHEST_DIRECTION).includes(chestDirection as ChestDirection);

export { isChestDirection };
