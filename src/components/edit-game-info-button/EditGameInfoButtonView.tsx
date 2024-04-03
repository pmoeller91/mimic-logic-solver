import { MouseEventHandler } from 'react';

interface EditGameSettingsButtonViewProps {
  buttonLabel: string;
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function EditGameSettingsButtonView({
  buttonLabel,
  handleOnClick,
  className,
}: EditGameSettingsButtonViewProps) {
  return (
    <button onClick={handleOnClick} className={className}>
      {buttonLabel}
    </button>
  );
}

export { EditGameSettingsButtonView };
