import { useTranslation } from 'react-i18next';
import { ChestHintTypeField } from './ChestHintTypeField';
import { ChestHintParamsField } from './ChestHintParamsField';

function ChestHintSection() {
  const { t } = useTranslation();
  const title = t('editChestInfo.chestHintSection.title');
  return (
    <>
      <h3 className="font-bold my-4 text-xl border-b-2">{title}</h3>
      <div className="flex flex-col gap-4">
        <ChestHintTypeField />
        <ChestHintParamsField />
      </div>
    </>
  );
}

export { ChestHintSection };
