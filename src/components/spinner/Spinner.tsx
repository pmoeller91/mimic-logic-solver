import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef } from 'react';

interface SpinnerProps {
  className?: string;
  ariaLabel?: string;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  { className, ariaLabel },
  ref
) {
  return (
    <div className={className} ref={ref}>
      {ariaLabel && <div className="sr-only">{ariaLabel}</div>}
      <FontAwesomeIcon
        icon={faSpinner}
        className="animate-spin w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
});

export { Spinner };
