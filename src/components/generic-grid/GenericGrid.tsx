import { ValidGridSizes } from '@/types/chestGrid';
import { ChestLocation } from '@/types/chestLocation';
import { forwardRef } from 'react';
import { GenericGridWrapper } from './GenericGridWrapper';

import styles from './genericGrid.module.scss';

interface GenericGridProps {
  gridSize: ValidGridSizes;
  className?: string;
  children: (
    chestLocation: ChestLocation,
    className: string,
    chestNumber: number
  ) => JSX.Element;
}

const gridCoords: Record<ValidGridSizes, ChestLocation[]> = {
  4: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  6: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  7: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
  ],
  9: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
};

const GenericGrid = forwardRef<HTMLDivElement, GenericGridProps>(
  function GenericGrid({ gridSize, className, children }, ref) {
    return (
      <GenericGridWrapper gridSize={gridSize} className={className} ref={ref}>
        {gridCoords[gridSize].map((chestLocation, i) =>
          children(chestLocation, styles[`chest-${i + 1}`], i + 1)
        )}
      </GenericGridWrapper>
    );
  }
);

export { GenericGrid };
