import { PropertiesDrawerHeaderView } from './PropertiesDrawerHeaderView';

interface PropertiesDrawerHeaderContainerProps {
  title: string;
  close: () => void;
}

function PropertiesDrawerHeaderContainer({
  title,
  close,
}: PropertiesDrawerHeaderContainerProps) {
  return <PropertiesDrawerHeaderView title={title} close={close} />;
}

export { PropertiesDrawerHeaderContainer };
