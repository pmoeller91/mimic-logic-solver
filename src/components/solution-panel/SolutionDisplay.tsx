import { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { solutionAtom } from '@/atoms/solver/solutionAtom';
import { solutionGridAtom } from '@/atoms/solver/solutionGridAtom';
import { SolutionGrid } from '../solution-grid/SolutionGrid';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../spinner/Spinner';
import { isSolvingAtom } from '@/atoms/solver/isSolvingAtom';

interface SolutionDisplayProps extends ComponentPropsWithRef<'div'> {
  className?: string;
}

const SolutionDisplay = forwardRef<HTMLDivElement, SolutionDisplayProps>(
  function SolutionDisplay({ className, ...rest }, ref) {
    const { t } = useTranslation();
    const solution = useAtomValue(solutionAtom);
    const solutionGrid = useAtomValue(solutionGridAtom);
    const isSolving = useAtomValue(isSolvingAtom);

    const noSolutionYet = t('solutionDisplay.noSolutionYet');

    const solvingLabel = t('solutionDisplay.solvingLabel');

    return (
      <div
        className={clsx(
          'flex flex-grow flex-col items-center justify-center',
          className
        )}
        ref={ref}
        {...rest}
      >
        {solution && solutionGrid && (
          <SolutionGrid solution={solution} grid={solutionGrid} />
        )}
        {(!solution || !solutionGrid) && !isSolving && (
          <div>{noSolutionYet}</div>
        )}
        {isSolving && (
          <div className="flex flex-col gap-4 items-center">
            <Spinner className="h-8 w-8" />
            <div>{solvingLabel}</div>
          </div>
        )}
      </div>
    );
  }
);

export { SolutionDisplay };
