import { useTranslation } from "react-i18next";
import { ChestContentsField } from "./ChestContentsField";
import { ChestColorFieldContainer } from "./chest-color-field/ChestColorFieldContainer";

function ChestPropertiesSection() {
  const { t } = useTranslation();
  const title = t("editChestInfo.chestPropertiesSection.title");
  return (
    <>
      <h3 className="font-bold my-4 text-xl border-b-2">{title}</h3>
      <div className="flex flex-col gap-4 w-full">
        <ChestColorFieldContainer />
        <ChestContentsField />
      </div>
    </>
  );
}

export { ChestPropertiesSection };
