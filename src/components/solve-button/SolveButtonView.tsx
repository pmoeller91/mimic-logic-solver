import { DefinedAttribute } from '@/types/definedAttribute';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { Button } from '../button/Button';

interface SolveButtonViewProps {
  isDisabled?: boolean;
  label: string;
  className?: string;
  onClick?: DefinedAttribute<'button', 'onClick'>;
}

const SolveButtonView = forwardRef<HTMLButtonElement, SolveButtonViewProps>(
  function SolveButtonView({ isDisabled, label, className, onClick }, ref) {
    return (
      <Button
        disabled={isDisabled}
        onClick={onClick}
        ref={ref}
        className={clsx('', className)}
      >
        {label}
      </Button>
    );
  }
);

export { SolveButtonView };
