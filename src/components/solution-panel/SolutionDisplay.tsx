import { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { solutionAtom } from '@/atoms/solver/solutionAtom';

interface SolutionDisplayProps extends ComponentPropsWithRef<'div'> {
  className?: string;
}

const SolutionDisplay = forwardRef<HTMLDivElement, SolutionDisplayProps>(
  function SolutionDisplay({ className, ...rest }, ref) {
    const solution = useAtomValue(solutionAtom);
    const message = solution
      ? JSON.stringify(solution, undefined, 2)
      : 'Not solved yet';

    return (
      <div className={clsx('whitespace-pre', className)} ref={ref} {...rest}>
        {message}
      </div>
    );
  }
);

export { SolutionDisplay };
