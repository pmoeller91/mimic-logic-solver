import { Drawer } from "vaul";
import { PROPERTIES_DRAWER_MODE, PropertiesDrawerMode } from "@/types/propertiesDrawer";
import { EditGameInfoContainer } from "../edit-game-info/EditGameInfoContainer";
import { PropertiesDrawerWrapper } from "./PropertiesDrawerWrapper";
import { ComponentProps } from "react";
import { EditChestInfoContainer } from "../edit-chest-info/EditChestInfoContainer";

interface PropertiesDrawerViewProps {
  isOpen: boolean;
  onCloseAutoFocus?: ComponentProps<typeof Drawer.Content>["onCloseAutoFocus"];
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  direction?: "bottom" | "right";
  mode: PropertiesDrawerMode;
  titleId: string;
  descriptionId: string;
  propertiesDrawerId: string;
}

function PropertiesDrawerView({
  isOpen,
  onOpenChange,
  direction,
  mode,
  onClose,
  titleId,
  descriptionId,
  onCloseAutoFocus,
  propertiesDrawerId,
}: PropertiesDrawerViewProps) {
  const defaultDirection = direction ?? "right";
  return (
    <Drawer.Root open={isOpen} onOpenChange={onOpenChange} direction={direction} modal>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          aria-modal="true"
          asChild
          onCloseAutoFocus={onCloseAutoFocus}
          id={propertiesDrawerId}
        >
          <PropertiesDrawerWrapper direction={defaultDirection}>
            {mode === PROPERTIES_DRAWER_MODE.gameInfo && (
              <EditGameInfoContainer onClose={onClose} />
            )}
            {mode === PROPERTIES_DRAWER_MODE.chest && <EditChestInfoContainer onClose={onClose} />}
          </PropertiesDrawerWrapper>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export { PropertiesDrawerView };
