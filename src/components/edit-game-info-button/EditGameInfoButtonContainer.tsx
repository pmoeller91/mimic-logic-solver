import { EditGameSettingsButtonView } from "./EditGameInfoButtonView";
import { useTranslation } from "react-i18next";

interface EditGameSettingsButtonContainerProps {
  className?: string;
}

function EditGameSettingsButtonContainer({ className }: EditGameSettingsButtonContainerProps) {
  const { t } = useTranslation();
  const buttonLabel = t("editGameInfoButton.buttonLabel");
  return <EditGameSettingsButtonView buttonLabel={buttonLabel} className={className} />;
}

export { EditGameSettingsButtonContainer };
