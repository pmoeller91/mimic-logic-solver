import { forwardRef } from "react";
import { SolveButtonView } from "./SolveButtonView";
import { useAtomValue, useSetAtom } from "jotai";
import { isSolvingAtom } from "@/atoms/solver/isSolvingAtom";
import { useCallback } from "use-memo-one";
import { solve } from "@/solver-bridge/solverBridge";
import { derivedChestGridAtom } from "@/atoms/derivedChestGridAtom";
import { gameInfoAtom } from "@/atoms/gameInfoAtom";
import { DefinedAttribute } from "@/types/definedAttribute";
import { useTranslation } from "react-i18next";
import { selectedTabAtom } from "@/atoms/selectedTabAtom";
import { MAIN_TAB } from "@/types/mainTab";

interface SolveButtonContainerProps {
  className?: string;
}

const SolveButtonContainer = forwardRef<HTMLButtonElement, SolveButtonContainerProps>(
  function SolveButtonContainer({ className }, ref) {
    const { t } = useTranslation();
    const grid = useAtomValue(derivedChestGridAtom);
    const gameInfo = useAtomValue(gameInfoAtom);
    const setSelectedTab = useSetAtom(selectedTabAtom);

    const isSolving = useAtomValue(isSolvingAtom);
    const handleOnClick: DefinedAttribute<"button", "onClick"> = useCallback(() => {
      solve({ grid, gameInfo });
      setSelectedTab(MAIN_TAB.solution);
    }, [grid, gameInfo, setSelectedTab]);

    const solveButtonLabel = t("solveButton.buttonLabel");

    return (
      <SolveButtonView
        label={solveButtonLabel}
        className={className}
        ref={ref}
        isDisabled={isSolving}
        onClick={handleOnClick}
      />
    );
  },
);

export { SolveButtonContainer };
