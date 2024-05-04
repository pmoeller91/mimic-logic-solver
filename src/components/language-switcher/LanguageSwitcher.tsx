import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAtomValue } from "jotai";
import { useStableId } from "@/hooks/useStableId";
import { selectedLanguageAtom } from "@/atoms/selectedLanguageAtom";
import { supportedLngs } from "@/locale/supportedLngs";

type OnChangeCallback = Required<JSX.IntrinsicElements["select"]>["onChange"];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const idSuffix = useStableId();

  const selectedLanguage = useAtomValue(selectedLanguageAtom);

  const handleOnChange = useCallback<OnChangeCallback>(
    (e) => {
      void i18n.changeLanguage(e.target.value);
    },
    [i18n],
  );

  const selectId = `language-switcher-${idSuffix}`;
  const labelId = `language-switcher-${idSuffix}-label`;

  const label = t("languageSwitcher.label");

  return (
    <div className="w-24 relative">
      <label htmlFor={selectId} id={labelId} className="sr-only">
        {label}
      </label>
      <select
        id={selectId}
        aria-labelledby={labelId}
        onChange={handleOnChange}
        value={selectedLanguage}
        className="w-full bg-bg-light px-2 py-1"
      >
        {supportedLngs.map((lng) => (
          <option key={lng} value={lng}>
            {t(`languages.${lng}`)}
          </option>
        ))}
      </select>
    </div>
  );
}

export { LanguageSwitcher };
