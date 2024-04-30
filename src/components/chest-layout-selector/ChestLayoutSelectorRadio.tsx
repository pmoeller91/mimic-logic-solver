import { createChestGrid } from "@/util/chest-grid/createChestGrid";
import { MiniChestGrid } from "../mini-chest-grid/MiniChestGrid";
import { ValidGridSizes } from "@/types/chestGrid";
import { useMemo } from "use-memo-one";
import { useStableId } from "@/hooks/useStableId";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { RadioTile } from "../radio-tile/RadioTile";
import { RADIO_TILE_SIZE } from "../radio-tile/radioTileSize";

interface ChestLayoutSelectorRadioProps {
  numChests: ValidGridSizes;
  checked?: boolean;
  onChange: Required<JSX.IntrinsicElements["input"]>["onChange"];
}

function ChestLayoutSelectorRadio({ numChests, checked, onChange }: ChestLayoutSelectorRadioProps) {
  const chestGrid = useMemo(() => {
    return createChestGrid({ numChests });
  }, [numChests]);
  const { t } = useTranslation();
  const label = t("chestLayoutSelector.numChests", { count: numChests });
  const idSuffix = useStableId();
  const inputId = `chest-selector-${idSuffix}`;
  return (
    <RadioTile
      onChange={onChange}
      size={RADIO_TILE_SIZE.large}
      value={numChests}
      checked={checked}
      inputId={inputId}
    >
      <div
        aria-hidden="true"
        className="h-16 aspect-square flex flex-col items-center justify-center"
      >
        <MiniChestGrid grid={chestGrid} className="my-auto" />
      </div>
      <label
        htmlFor={inputId}
        className={clsx("text-center", checked ? "text-white" : "text-text-primary")}
      >
        {label}
      </label>
    </RadioTile>
  );
}

export { ChestLayoutSelectorRadio };
