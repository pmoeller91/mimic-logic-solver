import { forwardRef } from 'react';
import { EditGameInfoView } from './EditGameInfoView';
import { useTranslation } from 'react-i18next';

interface EditGameInfoContainerProps {
  close: () => void;
  additionalProps?: Record<string, unknown>;
}

const EditGameInfoContainer = forwardRef<
  HTMLDivElement,
  EditGameInfoContainerProps
>(function EditGameInfoContainer(
  { close, additionalProps }: EditGameInfoContainerProps,
  ref
) {
  const { t } = useTranslation();
  const title = t('editGameInfo.title');
  return (
    <EditGameInfoView
      ref={ref}
      additionalProps={additionalProps}
      title={title}
      close={close}
    />
  );
});

export { EditGameInfoContainer };
