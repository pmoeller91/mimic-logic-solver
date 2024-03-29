import { i18n, supportedLngs } from '@/i18n';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CountryFlag } from './CountryFlag';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { atom, useAtom } from 'jotai';

type OnChangeHandler<T> = (
  newValue: SingleValue<T>,
  actionMeta: ActionMeta<T>
) => void;

interface LanguageOption {
  value: string;
}

const options: LanguageOption[] = supportedLngs.map((lng) => ({
  value: lng,
}));

const selectedLanguageAtom = atom<LanguageOption | null>(
  options.find(
    (option) => option.value === (i18n.resolvedLanguage ?? i18n.language)
  ) ?? options[0]
);

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useAtom(selectedLanguageAtom);

  const handleOnChange = useCallback<OnChangeHandler<LanguageOption>>(
    (newSelectedLanguage) => {
      setSelectedLanguage(newSelectedLanguage);
      if (newSelectedLanguage) {
        void i18n.changeLanguage(newSelectedLanguage.value);
      }
    },
    [i18n, setSelectedLanguage]
  );

  return (
    <Select
      menuPlacement="auto"
      options={options}
      onChange={handleOnChange}
      value={selectedLanguage}
      styles={{
        menu: (baseStyles) => ({ ...baseStyles, color: 'black' }),
      }}
      theme={(defaultTheme) => ({
        ...defaultTheme,
        spacing: {
          ...defaultTheme.spacing,
          controlHeight: 16,
          baseUnit: 2,
        },
      })}
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
