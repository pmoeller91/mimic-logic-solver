import { useTranslation } from "react-i18next";
import { ChestSelector } from "./ChestSelector";
import { SelectedChestTile } from "./SelectedChestTile";

function SelectChestSection() {
  const { t } = useTranslation();
  const title = t("editChestInfo.selectChestSection.title");
  return (
    <>
      <h3 className="font-bold mb-4 text-xl border-b-2">{title}</h3>
      <div className="flex flex-col gap-4 items-center w-full">
        <ChestSelector />
        <SelectedChestTile className="w-48" />
      </div>
    </>
  );
}

export { SelectChestSection };
