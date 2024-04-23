import { GAME_MODE, GameMode } from '@/types/gameMode';

const isGameMode = (gameMode: string): gameMode is GameMode => {
  return Object.values(GAME_MODE).includes(gameMode as GameMode);
};

export { isGameMode };
