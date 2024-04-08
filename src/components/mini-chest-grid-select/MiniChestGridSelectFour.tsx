import { ChestGridSized } from '@/types/chestGrid';
import { MiniChestGridSelectWrapper } from './MiniChestGridSelectWrapper';
import { MiniChestSelectIcon } from './MiniChestSelectIcon';
import { ChestGridCallbacks } from '@/hooks/useChestGridCallbacks';
import { GenerateLabelCallback } from './MiniChestGridSelect';
import { useTranslation } from 'react-i18next';

interface MiniChestGridSelectFourProps {
  grid: ChestGridSized<4>;
  className?: string;
  onClickCallbacks: ChestGridCallbacks;
  selectedChest?: [row: 0 | 1 | 2, col: 0 | 1 | 2];
  genAriaLabel: GenerateLabelCallback;
  legendString: string;
}

function MiniChestGridSelectFour({
  grid,
  className,
  onClickCallbacks,
  selectedChest,
  genAriaLabel,
  legendString,
}: MiniChestGridSelectFourProps) {
  const [selectedRow, selectedCol] = selectedChest ?? [-1, -1];
  const gridCoords = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ] as const;
  const { t } = useTranslation();
  return (
    <MiniChestGridSelectWrapper
      className={className}
      legendString={legendString}
    >
      {gridCoords.map(([row, col]) => (
        <MiniChestSelectIcon
          chestColor={grid.rows[row][col].color}
          className="col-span-3"
          onClick={onClickCallbacks[row][col]}
          isSelected={selectedRow === row && selectedCol === col}
          key={`${row}-${col}`}
          ariaLabel={genAriaLabel({
            row,
            col,
            color: grid.rows[row][col].color,
            t,
          })}
        />
      ))}
    </MiniChestGridSelectWrapper>
  );
}

export { MiniChestGridSelectFour };
