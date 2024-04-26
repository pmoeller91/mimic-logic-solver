const CHEST_COLOR = {
  red: 'RED',
  blue: 'BLUE',
  black: 'BLACK',
} as const;

type ChestColor = (typeof CHEST_COLOR)[keyof typeof CHEST_COLOR];

export { CHEST_COLOR };
export type { ChestColor };
