import { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { solutionAtom } from '@/atoms/solver/solutionAtom';
import { solutionGridAtom } from '@/atoms/solver/solutionGridAtom';
import { SolutionGrid } from '../solution-grid/SolutionGrid';

interface SolutionDisplayProps extends ComponentPropsWithRef<'div'> {
  className?: string;
}

const SolutionDisplay = forwardRef<HTMLDivElement, SolutionDisplayProps>(
  function SolutionDisplay({ className, ...rest }, ref) {
    const solution = useAtomValue(solutionAtom);
    const solutionGrid = useAtomValue(solutionGridAtom);

    return (
      <div className={clsx('flex flex-grow flex-col items-center justify-center', className)} ref={ref} {...rest}>
        {solution && solutionGrid && (
          <SolutionGrid solution={solution} grid={solutionGrid} />
        )}
        {(!solution || !solutionGrid) && <div>No solution yet!</div>}
      </div>
    );
  }
);

export { SolutionDisplay };
