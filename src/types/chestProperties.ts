const CHEST_COLOR = {
  red: 'RED',
  blue: 'BLUE',
  black: 'BLACK',
} as const;

type ChestColor = (typeof CHEST_COLOR)[keyof typeof CHEST_COLOR];

const CHEST_CONTENTS = {
  gold: 'GOLD',
  item: 'ITEM',
  gear: 'GEAR',
  mimic: 'MIMIC',
  unknown: 'UNKNOWN',
} as const;

type ChestContents = (typeof CHEST_CONTENTS)[keyof typeof CHEST_CONTENTS];

export { CHEST_COLOR, CHEST_CONTENTS };
export type { ChestColor, ChestContents };