import { forwardRef } from 'react';
import { PropertiesDrawerHeaderContainer } from '../properties-drawer-header/PropertiesDrawerHeaderContainer';
import { ChestLayoutSelectorContainer } from '../chest-layout-selector/ChestLayoutSelectorContainer';
import { MimicsField } from './MimicsField';

interface EditGameInfoViewProps {
  additionalProps?: Record<string, unknown>;
  title: string;
  close: () => void;
}

const EditGameInfoView = forwardRef<HTMLDivElement, EditGameInfoViewProps>(
  function EditGameInfoView({ additionalProps, title, close }, ref) {
    return (
      <div {...additionalProps} ref={ref}>
        <PropertiesDrawerHeaderContainer title={title} close={close} />
        <div className="px-8 py-4">
          <ChestLayoutSelectorContainer />
          <MimicsField />
        </div>
      </div>
    );
  }
);

export { EditGameInfoView };
