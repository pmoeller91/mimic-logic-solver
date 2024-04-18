const MAIN_TAB = {
  gameField: 'GAME_FIELD',
  solution: 'SOLUTION',
} as const;

type MainTab = (typeof MAIN_TAB)[keyof typeof MAIN_TAB];

export { MAIN_TAB };
export type { MainTab };
