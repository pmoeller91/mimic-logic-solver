import { forwardRef, useState } from "react";
import { ConfirmButtonView } from "./ConfirmButtonView";
import { useTranslation } from "react-i18next";
import { useCallback } from "use-memo-one";

interface ConfirmButtonContainerProps {
  onConfirm: () => void;
  buttonLabel: string;
  confirmDialogExplanation: string;
  confirmDialogTitle: string;
  className?: string;
}

const ConfirmButtonContainer = forwardRef<HTMLButtonElement, ConfirmButtonContainerProps>(
  function ConfirmButtonContainer(
    { onConfirm, buttonLabel, confirmDialogExplanation, confirmDialogTitle, className },
    ref,
  ) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const handleOnOpenChange = useCallback(
      (newOpenState: boolean) => {
        setIsOpen(newOpenState);
      },
      [setIsOpen],
    );
    const handleOnConfirm = useCallback(() => {
      onConfirm();
      setIsOpen(false);
    }, [onConfirm, setIsOpen]);

    const closeDialog = useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);

    const cancelLabel = t("confirmButton.cancelLabel");

    return (
      <ConfirmButtonView
        isOpen={isOpen}
        onOpenChange={handleOnOpenChange}
        onConfirm={handleOnConfirm}
        confirmDialogTitle={confirmDialogTitle}
        confirmDialogExplanation={confirmDialogExplanation}
        buttonLabel={buttonLabel}
        cancelLabel={cancelLabel}
        closeDialog={closeDialog}
        className={className}
        ref={ref}
      />
    );
  },
);

export { ConfirmButtonContainer };
