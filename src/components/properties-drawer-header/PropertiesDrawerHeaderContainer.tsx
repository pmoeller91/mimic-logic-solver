import { useAtomValue } from 'jotai';
import { PropertiesDrawerHeaderView } from './PropertiesDrawerHeaderView';
import { propertiesDrawerTitleIdAtom } from '../properties-drawer/propertiesDrawerAtoms';

interface PropertiesDrawerHeaderContainerProps {
  title: string;
  close: () => void;
}

function PropertiesDrawerHeaderContainer({
  title,
  close,
}: PropertiesDrawerHeaderContainerProps) {
  const titleId = useAtomValue(propertiesDrawerTitleIdAtom);
  return <PropertiesDrawerHeaderView title={title} close={close} titleId={titleId} />;
}

export { PropertiesDrawerHeaderContainer };
