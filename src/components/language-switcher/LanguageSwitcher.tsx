import { supportedLngs } from '@/i18n';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CountryFlag } from './CountryFlag';
import Select, { ActionMeta, SingleValue } from 'react-select';

type OnChangeHandler<T> = (
  newValue: SingleValue<T>,
  actionMeta: ActionMeta<T>
) => void;

interface LanguageOption {
  value: string;
}

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const options: LanguageOption[] = useMemo(
    () =>
      supportedLngs.map((lng) => ({
        value: lng,
      })),
    []
  );

  const [selectedLanguage, setSelectedLanguage] = useState<
    SingleValue<LanguageOption>
  >(
    options.find(
      (option) => option.value === (i18n.resolvedLanguage ?? i18n.language)
    ) ?? options[0]
  );

  const handleOnChange = useCallback<OnChangeHandler<LanguageOption>>(
    (newSelectedLanguage) => {
      setSelectedLanguage(newSelectedLanguage);
      if (newSelectedLanguage) {
        void i18n.changeLanguage(newSelectedLanguage.value);
      }
    },
    [i18n]
  );

  return (
    <Select
      options={options}
      onChange={handleOnChange}
      value={selectedLanguage}
      styles={{
        menu: (baseStyles) => ({ ...baseStyles, color: 'black' }),
      }}
      formatOptionLabel={(option) => (
        <div>
          <CountryFlag langCode={option.value} className="inline-block mr-4" />
          {t(`languages.${option.value}`)}
        </div>
      )}
      getOptionLabel={(option) => t(`languages.${option.value}`)}
    />
  );
}

export { LanguageSwitcher };
