import { useOpenPropertiesDrawer } from '@/hooks/useOpenPropertiesDrawer';
import { EditGameSettingsButtonView } from './EditGameInfoButtonView';
import { PROPERTIES_DRAWER_MODE } from '@/types/propertiesDrawer';
import { useTranslation } from 'react-i18next';

interface EditGameSettingsButtonContainerProps {
  className?: string;
}

function EditGameSettingsButtonContainer({ className }: EditGameSettingsButtonContainerProps) {
  const { t } = useTranslation();
  const handleOnClick = useOpenPropertiesDrawer({
    mode: PROPERTIES_DRAWER_MODE.gameInfo,
  });
  const buttonLabel = t('editGameInfoButton.buttonLabel');
  return (
    <EditGameSettingsButtonView
      handleOnClick={handleOnClick}
      buttonLabel={buttonLabel}
      className={className}
    />
  );
}

export { EditGameSettingsButtonContainer };
