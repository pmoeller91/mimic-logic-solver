import { GAME_MODE, GameMode } from '@/types/gameMode';
import { GetTranslationParams, TRANSLATION_TYPE } from '@/types/translation';

type GetGameModeTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.gameMode,
  GameMode
>;

const gameModeTranslations: Record<GameMode, string> = {
  [GAME_MODE.standard]: 'gameMode.standard',
};

function getGameModeTranslation({ key, t }: GetGameModeTranslationParams) {
  return t(gameModeTranslations[key]);
}

export { getGameModeTranslation };
export type { GetGameModeTranslationParams };
