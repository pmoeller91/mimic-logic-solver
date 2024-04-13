import { DefinedAttribute } from '@/types/definedAttribute';
import clsx from 'clsx';
import { forwardRef } from 'react';

interface SolveButtonViewProps {
  isDisabled?: boolean;
  label: string;
  className?: string;
  onClick?: DefinedAttribute<'button', 'onClick'>;
}

const SolveButtonView = forwardRef<HTMLButtonElement, SolveButtonViewProps>(
  function SolveButtonView({ isDisabled, label, className, onClick }, ref) {
    return (
      <button disabled={isDisabled} onClick={onClick} ref={ref} className={clsx("", className)}>
        {label}
      </button>
    );
  }
);

export { SolveButtonView };
