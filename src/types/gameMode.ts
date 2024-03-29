const GAME_MODE = {
  standard: 'STANDARD',
} as const;

type GameMode = (typeof GAME_MODE)[keyof typeof GAME_MODE];

export { GAME_MODE };
export type { GameMode };
