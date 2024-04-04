import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import clsx from 'clsx';

interface CloseButtonViewProps {
  ariaLabel: string;
  onClick: Required<JSX.IntrinsicElements['button']>['onClick'];
  className?: string;
}

function CloseButtonView({
  ariaLabel,
  onClick,
  className,
}: CloseButtonViewProps) {
  return (
    <button
      onClick={onClick}
      className={clsx('bg-transparent h-12 w-12 p-2', className)}
    >
      <span className="sr-only">{ariaLabel}</span>
      <FontAwesomeIcon icon={faXmark} role="presentation" size="xl" />
    </button>
  );
}

export { CloseButtonView };
