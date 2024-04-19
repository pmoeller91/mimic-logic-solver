import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from '@/locale/en.json';
import jaJSON from '@/locale/ja.json';
import { localizedYup } from '@/util/yup/localizedYup';
import { selectedLanguageAtom } from './atoms/selectedLanguageAtom';
import { supportedLngs } from './locale/supportedLngs';
import { store } from './atoms/store';

i18n.on('languageChanged', (lng) => {
  store.set(selectedLanguageAtom, lng);
});

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: enJSON,
      ja: jaJSON,
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: () => {
      const fallbacks = ['en'];
      if (import.meta.env.DEV) {
        fallbacks.push('dev');
      }
      return fallbacks;
    },
    supportedLngs,
  });

export { i18n, localizedYup };
