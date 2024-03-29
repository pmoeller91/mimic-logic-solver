import { TRANSLATION_TYPE } from '@/types/translation';
import {
  GetGameModeTranslationParams,
  getGameModeTranslation,
} from './translation/getGameModeTranslation';
import {
  GetChestContentsTranslationParams,
  getChestContentsTranslation,
} from './translation/getChestContentsTranslation';

type GetGameTranslationParams =
  | GetGameModeTranslationParams
  | GetChestContentsTranslationParams;

function getGameTranslation({
  type,
  key,
  t,
}: GetGameTranslationParams): string {
  switch (type) {
    case TRANSLATION_TYPE.gameMode:
      return getGameModeTranslation({ type, key, t });
    case TRANSLATION_TYPE.chestContents:
      return getChestContentsTranslation({ type, key, t });
  }
}

export { getGameTranslation };
