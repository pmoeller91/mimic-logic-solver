import { ChestHint } from '@/types/chestHint';
import { GetTranslationParams, TRANSLATION_TYPE } from '@/types/translation';
import { chestHintTranslations } from './chestHintTranslations';

type GetChestHintBlankTranslationParams = GetTranslationParams<
  typeof TRANSLATION_TYPE.chestHintBlank,
  ChestHint['type']
>;

function getChestHintBlankTranslation({
  key,
  t,
}: GetChestHintBlankTranslationParams) {
  return t(chestHintTranslations[key], { context: 'blank' });
}

export { getChestHintBlankTranslation };
export type { GetChestHintBlankTranslationParams };
