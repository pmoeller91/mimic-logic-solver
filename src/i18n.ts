import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from '@/locale/en.json';
import jpJSON from '@/locale/jp.json';

const supportedLngs = ['en', 'jp'];

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: enJSON,
      jp: jpJSON,
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

export { i18n, supportedLngs };
