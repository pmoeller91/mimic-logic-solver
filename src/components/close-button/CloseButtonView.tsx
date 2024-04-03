import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

interface CloseButtonViewProps {
  ariaLabel: string;
  onClick: Required<JSX.IntrinsicElements['button']>['onClick'];
}

function CloseButtonView({ ariaLabel, onClick }: CloseButtonViewProps) {
  return (
    <button onClick={onClick} className="bg-transparent h-12 w-12 p-2">
      <span className="sr-only">{ariaLabel}</span>
      <FontAwesomeIcon icon={faXmark} role="presentation" size="xl" />
    </button>
  );
}

export { CloseButtonView };
