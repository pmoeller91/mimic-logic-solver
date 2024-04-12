import { TRANSLATION_TYPE } from '@/types/translation';
import {
  GetGameModeTranslationParams,
  getGameModeTranslation,
} from './translation/getGameModeTranslation';
import {
  GetChestContentsTranslationParams,
  getChestContentsTranslation,
} from './translation/getChestContentsTranslation';
import {
  GetChestHintTranslationParams,
  getChestHintTranslation,
} from './translation/getChestHintTranslation';
import {
  GetChestHintBlankTranslationParams,
  getChestHintBlankTranslation,
} from './translation/getChestHintBlankTranslation';

type GetGameTranslationParams =
  | GetGameModeTranslationParams
  | GetChestContentsTranslationParams
  | GetChestHintTranslationParams
  | GetChestHintBlankTranslationParams;

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
    case TRANSLATION_TYPE.chestHint:
      return getChestHintTranslation({ type, key, t });
    case TRANSLATION_TYPE.chestHintBlank:
      return getChestHintBlankTranslation({ type, key, t });
    default:
      return '';
  }
}

export { getGameTranslation };
