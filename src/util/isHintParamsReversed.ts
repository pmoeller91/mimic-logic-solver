import { ChestHintType } from '@/types/chestHint';
import { TFunction } from 'i18next';
import { chestHintTranslations } from './translation/chestHintTranslations';

interface IsHintParamsReversedParams {
  t: TFunction;
  chestHintType: ChestHintType;
}

// A hack to allow specifying via translation file whether the parameters
// (blanks) for a hint are used in reverse order compared to English. This
// allows the UI to request the blanks in the most logical reading order for
// each language.
const isHintParamsReversed = ({
  t,
  chestHintType,
}: IsHintParamsReversedParams): boolean => {
  const reversedTranslation = t(
    `${chestHintTranslations[chestHintType]}_paramsReversed`
  );
  return reversedTranslation === 'true';
};

export { isHintParamsReversed };
