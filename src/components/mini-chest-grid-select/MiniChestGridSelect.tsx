import { ChestGrid as ChestGridType } from '@/types/chestGrid';
import {
  ChestGridCallback,
  useChestGridCallbacks,
} from '@/hooks/useChestGridCallbacks';
import { ChestColor } from '@/types/chestProperties';
import { TFunction } from 'i18next';
import { GenericGrid } from '../generic-grid/GenericGrid';
import { MiniChestSelectIcon } from './MiniChestSelectIcon';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

type GenerateLabelCallback = ({
  row,
  col,
  color,
  t,
}: {
  row: number;
  col: number;
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
  const { t } = useTranslation();
  const [selectedRow, selectedCol] = selectedChest ?? [-1, -1];
  return (
    <fieldset>
      <legend className="sr-only">{legendString}</legend>
      <GenericGrid
        gridSize={grid.numChests}
        className={clsx('gap-1', className)}
      >
        {(chestLocation, chestClassName) => (
          <MiniChestSelectIcon
            chestColor={grid.rows[chestLocation[0]][chestLocation[1]].color}
            className={chestClassName}
            onClick={onClickCallbacks[chestLocation[0]][chestLocation[1]]}
            isSelected={
              selectedRow === chestLocation[0] &&
              selectedCol === chestLocation[1]
            }
            key={`${chestLocation[0]}-${chestLocation[1]}`}
            ariaLabel={genAriaLabel({
              row: chestLocation[0],
              col: chestLocation[1],
              color: grid.rows[chestLocation[0]][chestLocation[1]].color,
              t,
            })}
          />
        )}
      </GenericGrid>
    </fieldset>
  );
}

export { MiniChestGridSelect };
export type { GenerateLabelCallback };
