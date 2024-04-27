const GAME_MODE = {
  doubt: 'DOUBT',
  standard: 'STANDARD',
  random: 'RANDOM',
  robbers: 'ROBBERS',
} as const;

type GameMode = (typeof GAME_MODE)[keyof typeof GAME_MODE];

export { GAME_MODE };
export type { GameMode };
