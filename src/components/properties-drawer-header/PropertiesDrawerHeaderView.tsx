import { CloseButtonContainer } from '../close-button/CloseButtonContainer';

interface PropertiesDrawerHeaderViewProps {
  close: () => void;
  title: string;
}

function PropertiesDrawerHeaderView({
  close,
  title,
}: PropertiesDrawerHeaderViewProps) {
  return (
    <div className="flex flex-row items-center mb-4 pl-4 pr-2 py-4 bg-pd">
      <h2 className="text-xl">{title}</h2>
      <div className="flex-grow" />
      <CloseButtonContainer close={close} />
    </div>
  );
}

export { PropertiesDrawerHeaderView };
