import { forwardRef } from 'react';
import { ConfirmButtonContainer } from '../confirm-button/ConfirmButtonContainer';
import { useTranslation } from 'react-i18next';
import { useSetAtom } from 'jotai';
import { AllChests, allChestsCallbackAtom } from '@/atoms/allChestsAtom';
import { useCallback } from 'use-memo-one';
import { CHEST_COLOR, CHEST_CONTENTS } from '@/types/chestProperties';
import { getDefaultHint } from '@/util/getDefaultHint';
import { CHEST_HINT_TYPE } from '@/types/chestHint';

interface ResetPuzzleButtonProps {
  className?: string;
}

const ResetPuzzleButton = forwardRef<HTMLButtonElement, ResetPuzzleButtonProps>(
  function ResetPuzzleButton({ className }, ref) {
    const { t } = useTranslation();
    const resetButtonLabel = t('resetPuzzleButton.resetButtonLabel');
    const confirmDialogTitle = t('resetPuzzleButton.confirmDialogTitle');
    const confirmDialogExplanation = t(
      'resetPuzzleButton.confirmDialogExplanation'
    );
    const setAllChestsCallback = useSetAtom(allChestsCallbackAtom);
    const handleOnConfirm = useCallback(() => {
      setAllChestsCallback(
        (allChests) =>
          allChests.map((row) =>
            row.map((chest) => ({
              ...chest,
              color: CHEST_COLOR.red,
              contents: CHEST_CONTENTS.unknown,
              hint: getDefaultHint(CHEST_HINT_TYPE.selfAsleep),
            }))
          ) as AllChests
      );
    }, [setAllChestsCallback]);
    return (
      <ConfirmButtonContainer
        className={className}
        ref={ref}
        buttonLabel={resetButtonLabel}
        confirmDialogExplanation={confirmDialogExplanation}
        confirmDialogTitle={confirmDialogTitle}
        onConfirm={handleOnConfirm}
      />
    );
  }
);

export { ResetPuzzleButton };
