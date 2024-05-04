import { CHEST_RANK, ChestRank, ChestHint } from "@/types/chestHint";

const isChestRank = (chestRank: ChestHint["params"][number]): chestRank is ChestRank =>
  Object.values(CHEST_RANK).includes(chestRank as ChestRank);

export { isChestRank };
