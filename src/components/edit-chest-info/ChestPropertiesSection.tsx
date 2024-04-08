import { useTranslation } from 'react-i18next';
import { ChestColorField } from './ChestColorField';

function ChestPropertiesSection() {
  const { t } = useTranslation();
  const title = t('editChestInfo.chestPropertiesSection.title');
  return (
    <>
      <h3 className="font-bold my-4 text-xl border-b-2">{title}</h3>
      <ChestColorField />
    </>
  );
}

export { ChestPropertiesSection };
