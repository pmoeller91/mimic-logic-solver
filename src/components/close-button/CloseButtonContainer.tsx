import { useTranslation } from "react-i18next";
import { CloseButtonView } from "./CloseButtonView";
import { useCallback } from "use-memo-one";
import { ComponentProps, forwardRef } from "react";

interface CloseButtonContainerProps {
  close: () => void;
  className?: string;
}

type OnClickHandler = ComponentProps<typeof CloseButtonView>["onClick"];

const CloseButtonContainer = forwardRef<HTMLButtonElement, CloseButtonContainerProps>(
  function CloseButtonContainer({ close, className }, ref) {
    const { t } = useTranslation();
    const ariaLabel = t("closeButton.ariaLabel");
    const handleOnClick: OnClickHandler = useCallback(() => {
      close();
    }, [close]);
    return (
      <CloseButtonView
        ariaLabel={ariaLabel}
        onClick={handleOnClick}
        className={className}
        ref={ref}
      />
    );
  },
);

export { CloseButtonContainer };
