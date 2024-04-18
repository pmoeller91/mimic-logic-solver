import { ChestGrid, ValidGridSizes } from '@/types/chestGrid';
import { SolverSolution } from '@/types/solverMessage';
import { forwardRef } from 'react';
import { GenericGrid } from '../generic-grid/GenericGrid';
import { SolutionTileContainer } from '../solution-tile/SolutionTileContainer';
import { generateContextLabel } from '../chest-grid/generateContextLabel';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface SolutionGridProps {
  solution: SolverSolution;
  grid: ChestGrid;
  className?: string;
}

const validGridSizes: ValidGridSizes[] = [4, 6, 7, 9];

const isValidGridSize = (num: number): num is ValidGridSizes =>
  validGridSizes.includes(num as ValidGridSizes);

const SolutionGrid = forwardRef<HTMLDivElement, SolutionGridProps>(
  function SolutionGrid({ solution, className, grid }, ref) {
    const { t } = useTranslation();
    const gridSize = solution.length;
    if (!isValidGridSize(gridSize) || grid.numChests !== gridSize) {
      return null;
    }
    return (
      <GenericGrid
        gridSize={gridSize}
        className={clsx(
          'w-full 2xl:w-1/2 lg:w-3/4 grid gap-1 p-1 sm:gap-2 sm:p-2 lg:gap-8 lg:p-8 m-auto',
          className
        )}
        ref={ref}
      >
        {(chestLocation, chestClassName, chestNumber) => (
          <SolutionTileContainer
            className={chestClassName}
            contextLabel={generateContextLabel({
              totalChests: grid.numChests,
              chestNum: chestNumber,
              col: chestLocation[1] + 1,
              row: chestLocation[0] + 1,
              t,
            })}
            chest={grid.rows[chestLocation[0]][chestLocation[1]]}
            chestSolution={solution[chestNumber - 1]}
            key={`solution-chest-${chestNumber}`}
          />
        )}
      </GenericGrid>
    );
  }
);

export { SolutionGrid };
