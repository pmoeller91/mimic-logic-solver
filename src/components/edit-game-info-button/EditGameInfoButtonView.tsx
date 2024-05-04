import { PROPERTIES_DRAWER_MODE } from "@/types/propertiesDrawer";
import { OpenPropertiesDrawerButtonContainer } from "../properties-drawer/OpenPropertiesDrawerButtonContainer";

interface EditGameSettingsButtonViewProps {
  buttonLabel: string;
  className?: string;
}

function EditGameSettingsButtonView({ buttonLabel, className }: EditGameSettingsButtonViewProps) {
  return (
    <OpenPropertiesDrawerButtonContainer
      mode={PROPERTIES_DRAWER_MODE.gameInfo}
      className={className}
    >
      {buttonLabel}
    </OpenPropertiesDrawerButtonContainer>
  );
}

export { EditGameSettingsButtonView };
