import { ChestColor } from "@/types/chestColor";
import { ChestIcon } from "../ChestIcon";
import { useStableId } from "@/hooks/useStableId";
import { RadioTile } from "../radio-tile/RadioTile";
import { RADIO_TILE_SIZE } from "../radio-tile/radioTileSize";

interface MiniChestIconProps {
  chestColor: ChestColor;
  className?: string;
  onClick: () => void;
  isSelected?: boolean;
  ariaLabel: string;
}

function MiniChestSelectIcon({
  chestColor,
  className,
  ariaLabel,
  isSelected,
  onClick,
}: MiniChestIconProps) {
  const idSuffix = useStableId();
  const inputId = `chest-selector-${idSuffix}`;
  return (
    <RadioTile
      onChange={onClick}
      size={RADIO_TILE_SIZE.medium}
      value={chestColor}
      checked={isSelected}
      inputId={inputId}
      className={className}
    >
      <ChestIcon chestColor={chestColor} aria-hidden="true" />
      <label htmlFor={inputId} className="sr-only">
        {ariaLabel}
      </label>
    </RadioTile>
  );
}

export { MiniChestSelectIcon };
