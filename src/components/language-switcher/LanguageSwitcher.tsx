import { supportedLngs } from '@/i18n';
import { ChangeEventHandler, useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { CountryFlag } from './CountryFlag';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleSelectLanguage = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >(
    (e) => {
      void i18n.changeLanguage(e.target.value);
    },
    [i18n]
  );

  return (
    <select value={i18n.resolvedLanguage} onChange={handleSelectLanguage}>
      {supportedLngs.map((lng) => (
        <option value={lng} key={lng}>
          <Trans
            i18nKey={`languages.${lng}`}
            components={{ flag: <CountryFlag langCode={lng} /> }}
          />
        </option>
      ))}
    </select>
  );
}

export { LanguageSwitcher };
