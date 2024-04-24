import { vi } from 'vitest';

module.exports = {
  useTranslation: vi.fn(() => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () =>
        new Promise(() => {
          return;
        }),
    },
  })),
};
