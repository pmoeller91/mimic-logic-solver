import { forwardRef } from "react";
import { ConfirmButtonContainer } from "../confirm-button/ConfirmButtonContainer";
import { useTranslation } from "react-i18next";
import { useSetAtom } from "jotai";
import { AllChests, allChestsCallbackAtom } from "@/atoms/allChestsAtom";
import { useCallback } from "use-memo-one";
import { CHEST_CONTENTS } from "@/types/chestContents";
import { CHEST_COLOR } from "@/types/chestColor";
import { getDefaultHint } from "@/util/getDefaultHint";
import { CHEST_HINT_TYPE } from "@/types/chestHint";
import { selectedTabAtom } from "@/atoms/selectedTabAtom";
import { MAIN_TAB } from "@/types/mainTab";
import { numGoldFormValueAtom } from "@/atoms/numGoldFormValueAtom";
import { numGearFormValueAtom } from "@/atoms/numGearFormValueAtom";
import { numItemsFormValueAtom } from "@/atoms/numItemsFormValueAtom";

interface ResetPuzzleButtonProps {
  className?: string;
}

const ResetPuzzleButton = forwardRef<HTMLButtonElement, ResetPuzzleButtonProps>(
  function ResetPuzzleButton({ className }, ref) {
    const { t } = useTranslation();
    const resetButtonLabel = t("resetPuzzleButton.resetButtonLabel");
    const confirmDialogTitle = t("resetPuzzleButton.confirmDialogTitle");
    const confirmDialogExplanation = t("resetPuzzleButton.confirmDialogExplanation");
    const setAllChestsCallback = useSetAtom(allChestsCallbackAtom);
    const setSelectedTab = useSetAtom(selectedTabAtom);
    const setNumGear = useSetAtom(numGearFormValueAtom);
    const setNumGold = useSetAtom(numGoldFormValueAtom);
    const setNumItems = useSetAtom(numItemsFormValueAtom);

    const handleOnConfirm = useCallback(() => {
      setAllChestsCallback(
        (allChests) =>
          allChests.map((row) =>
            row.map((chest) => ({
              ...chest,
              color: CHEST_COLOR.red,
              contents: CHEST_CONTENTS.unknown,
              hint: getDefaultHint(CHEST_HINT_TYPE.selfAsleep),
            })),
          ) as AllChests,
      );
      setNumGear("", true);
      setNumGold("", true);
      setNumItems("", true);
      // If we're resetting we'd probably like to immediately go set up a new
      // puzzle to solve, so go ahead and move back to the game field
      setSelectedTab(MAIN_TAB.gameField);
    }, [setAllChestsCallback, setNumGear, setNumGold, setNumItems, setSelectedTab]);
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
  },
);

export { ResetPuzzleButton };
