import * as Dialog from '@radix-ui/react-dialog';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { DialogWrapper } from '../dialog-wrapper/DialogWrapper';
import { Button } from '../button/Button';
import { BUTTON_TYPE } from '../button/buttonType';

interface ConfirmButtonViewProps extends ComponentPropsWithRef<'button'> {
  buttonLabel: string;
  onConfirm: () => void;
  className?: string;
  confirmDialogTitle: string;
  confirmDialogExplanation: string;
  cancelLabel: string;
  isOpen: boolean;
  closeDialog: () => void;
  onOpenChange: (newOpenState: boolean) => void;
}

const ConfirmButtonView = forwardRef<HTMLButtonElement, ConfirmButtonViewProps>(
  function ConfirmButtonView(
    {
      buttonLabel,
      cancelLabel,
      className,
      closeDialog,
      confirmDialogTitle,
      confirmDialogExplanation,
      isOpen,
      onConfirm,
      onOpenChange,
    },
    ref
  ) {
    return (
      <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
        <Dialog.Trigger asChild ref={ref}>
          <Button className={className}>{buttonLabel}</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40" />
          <Dialog.Content>
            <DialogWrapper
              title={confirmDialogTitle}
              titleAs={Dialog.Title}
              close={closeDialog}
              className="gap-4"
            >
              <div className="mx-4 mb-4">{confirmDialogExplanation}</div>
              <div className="flex flex-row items-center justify-end gap-4 mx-4 mb-4 ">
                <Button
                  onClick={closeDialog}
                  buttonType={BUTTON_TYPE.secondary}
                >
                  {cancelLabel}
                </Button>
                <Button onClick={onConfirm}>{buttonLabel}</Button>
              </div>
            </DialogWrapper>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

export { ConfirmButtonView };
