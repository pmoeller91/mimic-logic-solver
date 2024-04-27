import { GAME_MODE, GameMode } from '@/types/gameMode';
import { GetTranslationParams, TRANSLATION_TYPE } from '@/types/translation';

type GetGameModeTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.gameMode,
  GameMode
>;

const gameModeTranslations: Record<GameMode, string> = {
  [GAME_MODE.doubt]: 'gameMode.doubt',
  [GAME_MODE.standard]: 'gameMode.standard',
  [GAME_MODE.random]: 'gameMode.random',
  [GAME_MODE.robbers]: 'gameMode.robbers',
};

function getGameModeTranslation({ key, t }: GetGameModeTranslationParams) {
  return t(gameModeTranslations[key]);
}

export { getGameModeTranslation };
export type { GetGameModeTranslationParams };
