import { useTranslation } from "react-i18next";
import { EditChestInfoView, EditChestInfoViewTranslations } from "./EditChestInfoView";
import { forwardRef } from "react";
import { useMemo } from "use-memo-one";

interface EditChestInfoContainerProps {
  className?: string;
  onClose: () => void;
  [k: string]: unknown;
}

const EditChestInfoContainer = forwardRef<HTMLDivElement, EditChestInfoContainerProps>(
  function EditChestInfoContainer({ className, onClose, ...props }, ref) {
    const { t } = useTranslation();

    const translations: EditChestInfoViewTranslations = useMemo(
      () => ({
        title: t("editChestInfo.title"),
      }),
      [t],
    );

    return (
      <EditChestInfoView
        className={className}
        ref={ref}
        onClose={onClose}
        additionalProps={props}
        translations={translations}
      />
    );
  },
);

export { EditChestInfoContainer };
