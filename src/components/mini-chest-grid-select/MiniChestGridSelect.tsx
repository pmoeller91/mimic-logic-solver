import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import { MiniChestGridSelectFour } from './MiniChestGridSelectFour';
import { MiniChestGridSelectSeven } from './MiniChestGridSelectSeven';
import { MiniChestGridSelectSix } from './MiniChestGridSelectSix';
import { MiniChestGridSelectNine } from './MiniChestGridSelectNine';
import { ChestGridCallback, useChestGridCallbacks } from '@/hooks/useChestGridCallbacks';
import { ChestColor } from '@/types/chestProperties';
import { TFunction } from 'i18next';

type GenerateLabelCallback = ({
  row,
  col,
  color,
  t,
}: {
  row: 0 | 1 | 2;
  col: 0 | 1 | 2;
  color: ChestColor;
  t: TFunction;
}) => string;

interface MiniChestGridSelectProps {
  grid: ChestGridType;
  className?: string;
  selectedChest?: [row: 0 | 1 | 2, col: 0 | 1 | 2];
  onClick: ChestGridCallback;
  genAriaLabel: GenerateLabelCallback;
  legendString: string;
}

function MiniChestGridSelect({
  grid,
  className,
  onClick,
  selectedChest,
  genAriaLabel,
  legendString,
}: MiniChestGridSelectProps) {
  const onClickCallbacks = useChestGridCallbacks(onClick);
  switch (grid.numChests) {
    case 4:
      return (
        <MiniChestGridSelectFour
          grid={grid}
          className={className}
          onClickCallbacks={onClickCallbacks}
          selectedChest={selectedChest}
          genAriaLabel={genAriaLabel}
          legendString={legendString}
        />
      );
    case 6:
      return (
        <MiniChestGridSelectSix
          grid={grid}
          className={className}
          onClickCallbacks={onClickCallbacks}
          selectedChest={selectedChest}
          genAriaLabel={genAriaLabel}
          legendString={legendString}
        />
      );
    case 7:
      return (
        <MiniChestGridSelectSeven
          grid={grid}
          className={className}
          onClickCallbacks={onClickCallbacks}
          selectedChest={selectedChest}
          genAriaLabel={genAriaLabel}
          legendString={legendString}
        />
      );
    case 9:
      return (
        <MiniChestGridSelectNine
          grid={grid}
          className={className}
          onClickCallbacks={onClickCallbacks}
          selectedChest={selectedChest}
          genAriaLabel={genAriaLabel}
          legendString={legendString}
        />
      );
  }
  return null;
}

export { MiniChestGridSelect };
export type { GenerateLabelCallback };
