import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridSelectWrapper } from './MiniChestGridSelectWrapper';
import { MiniChestSelectIcon } from './MiniChestSelectIcon';
import { ChestGridCallbacks } from '@/hooks/useChestGridCallbacks';
import { GenerateLabelCallback } from './MiniChestGridSelect';
import { useTranslation } from 'react-i18next';

interface MiniChestGridSelectSevenProps {
  grid: ChestGridSized<7>;
  className?: string;
  onClickCallbacks: ChestGridCallbacks;
  selectedChest?: [row: 0 | 1 | 2, col: 0 | 1 | 2];
  genAriaLabel: GenerateLabelCallback;

  legendString: string;
}

function MiniChestGridSelectSeven({
  grid,
  className,
  onClickCallbacks,
  selectedChest,
  genAriaLabel,
  legendString,
}: MiniChestGridSelectSevenProps) {
  const [selectedRow, selectedCol] = selectedChest ?? [-1, -1];
  const gridCoords = [
    undefined,
    [0, 0],
    [0, 1],
    undefined,
    [1, 0],
    [1, 1],
    [1, 2],
    undefined,
    [2, 0],
    [2, 1],
    undefined,
  ] as const;
  const { t } = useTranslation();
  return (
    <MiniChestGridSelectWrapper
      className={className}
      legendString={legendString}
    >
      {gridCoords.map((coords, i) => {
        if (!coords) {
          return <div key={`spacer-${i}`} />;
        }
        const [row, col] = coords;
        return (
          <MiniChestSelectIcon
            // This must be defined, because the pairs provided in gridCoords
            // meet the structure of rows for the size-7 grid.
            chestColor={grid.rows[row][col]!.color}
            className="col-span-2"
            onClick={onClickCallbacks[row][col]}
            isSelected={selectedRow === row && selectedCol === col}
            key={`${row}-${col}`}
            ariaLabel={genAriaLabel({
              row,
              col,
              // This must be defined, because the pairs provided in gridCoords
              // meet the structure of rows for the size-7 grid.
              color: grid.rows[row][col]!.color,
              t,
            })}
          />
        );
      })}
    </MiniChestGridSelectWrapper>
  );
}

export { MiniChestGridSelectSeven };
