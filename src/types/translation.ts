import { TFunction } from 'i18next';

const TRANSLATION_TYPE = {
  gameMode: 'GAME_MODE',
  chestContents: 'CHEST_CONTENTS',
  chestHint: 'CHEST_HINT',
  chestHintBlank: 'CHEST_HINT_BLANK',
} as const;

type TranslationType = (typeof TRANSLATION_TYPE)[keyof typeof TRANSLATION_TYPE];

interface GetTranslationParams<T extends TranslationType, K> {
  type: T;
  key: K;
  t: TFunction;
}

export { TRANSLATION_TYPE };
export type { TranslationType, GetTranslationParams };
