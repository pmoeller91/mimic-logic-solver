import { CloseButtonContainer } from '../close-button/CloseButtonContainer';

interface PropertiesDrawerHeaderViewProps {
  close: () => void;
  title: string;
  titleId: string;
}

function PropertiesDrawerHeaderView({
  close,
  title,
  titleId,
}: PropertiesDrawerHeaderViewProps) {
  return (
    <div className="flex flex-row items-center pl-4 pr-2 py-4 bg-pd">
      <h2 className="text-xl" id={titleId}>
        {title}
      </h2>
      <CloseButtonContainer close={close} className="ml-auto" />
    </div>
  );
}

export { PropertiesDrawerHeaderView };
