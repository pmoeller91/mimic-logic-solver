import { CHEST_COLOR, ChestColor } from "@/types/chestColor";

const isChestColor = (chestColor: string): chestColor is ChestColor => {
  return Object.values(CHEST_COLOR).includes(chestColor as ChestColor);
};

export { isChestColor };
