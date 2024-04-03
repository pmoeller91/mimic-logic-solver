import { forwardRef } from 'react';
import { FormFieldContainer } from '../form-field/FormFieldContainer';
import { numMimicsFormValueAtom } from '@/atoms/numMimicsFormValueAtom';
import { PropertiesDrawerHeaderContainer } from '../properties-drawer-header/PropertiesDrawerHeaderContainer';

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
          <FormFieldContainer
            formValueAtom={numMimicsFormValueAtom}
            label={'Mimics'}
          />
        </div>
      </div>
    );
  }
);

export { EditGameInfoView };
