import {
  GenerateLabelCallback,
  MiniChestGridSelect,
} from "../mini-chest-grid-select/MiniChestGridSelect";
import { useAtom, useAtomValue } from "jotai";
import { selectedChestLocationAtom } from "@/atoms/selectedChestLocationAtom";
import { useCallback } from "use-memo-one";
import { derivedChestGridAtom } from "@/atoms/derivedChestGridAtom";
import { useTranslation } from "react-i18next";
import { ChestGridCallback } from "@/hooks/useChestGridCallbacks";

interface ChestSelectorProps {
  className?: string;
}

function ChestSelector({ className }: ChestSelectorProps) {
  const { t: localT } = useTranslation();
  const grid = useAtomValue(derivedChestGridAtom);
  const [selectedChestLocation, setSelectedChestLocation] = useAtom(selectedChestLocationAtom);
  const handleOnClick = useCallback<ChestGridCallback>(
    (row, col) => {
      setSelectedChestLocation([row, col]);
    },
    [setSelectedChestLocation],
  );
  const handleGenAriaLabel = useCallback<GenerateLabelCallback>(
    ({ row, col, color, t }) =>
      // Convert from 0-indexed row and column to 1-indexed for a good label for each selector
      t("chestSelector.ariaLabel", { row: row + 1, column: col + 1, color }),
    [],
  );
  const legendString = localT("chestSelector.legendString");

  return (
    <MiniChestGridSelect
      grid={grid}
      className={className}
      genAriaLabel={handleGenAriaLabel}
      onClick={handleOnClick}
      selectedChestLocation={selectedChestLocation}
      legendString={legendString}
    />
  );
}

export { ChestSelector };
