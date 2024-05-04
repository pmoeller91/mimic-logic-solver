const CHEST_CONTENTS = {
  gold: "GOLD",
  item: "ITEM",
  gear: "GEAR",
  mimic: "MIMIC",
  not_mimic: "NOT_MIMIC",
  robber: "ROBBER",
  unknown: "UNKNOWN",
} as const;

type ChestContents = (typeof CHEST_CONTENTS)[keyof typeof CHEST_CONTENTS];

export { CHEST_CONTENTS };
export type { ChestContents };
