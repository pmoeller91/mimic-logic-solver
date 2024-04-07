import { CHEST_HINT_TYPE, ChestHint } from '@/types/chestHint';
import { GetTranslationParams, TRANSLATION_TYPE } from '@/types/translation';

type GetChestHintTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.chestHint,
  ChestHint | undefined
>;

const chestHintTranslations: Record<ChestHint['type'], string> = {
  [CHEST_HINT_TYPE.asleep]: 'chestHint.asleep',
  [CHEST_HINT_TYPE.mimicNotSelf]: 'chestHint.mimicNotSelf',
  [CHEST_HINT_TYPE.mimicDirection]: 'chestHint.mimicDirection',
  [CHEST_HINT_TYPE.colorMoreMimics]: 'chestHint.colorMoreMimics',
};

function getChestHintTranslation({ key, t }: GetChestHintTranslationParams) {
  if (!key) {
    return t('chestHint.undefined');
  }
  return t(chestHintTranslations[key.type], {
    param1: key.params[0]?.value ?? '',
    param2: key.params[1]?.value ?? '',
  });
}

export { getChestHintTranslation };
export type { GetChestHintTranslationParams };
