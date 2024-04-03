import { Drawer } from 'vaul';
import {
  PROPERTIES_DRAWER_MODE,
  PropertiesDrawerMode,
} from '@/types/propertiesDrawer';
import { EditGameInfoContainer } from '../edit-game-info/EditGameInfoContainer';
import { PropertiesDrawerWrapper } from './PropertiesDrawerWrapper';

interface PropertiesDrawerViewProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  close: () => void;
  direction?: 'bottom' | 'right';
  mode: PropertiesDrawerMode;
}

function PropertiesDrawerView({
  isOpen,
  onOpenChange,
  direction,
  mode,
  close,
}: PropertiesDrawerViewProps) {
  const defaultDirection = direction ?? 'right';
  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={onOpenChange}
      direction={direction}
      modal
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content asChild>
          <PropertiesDrawerWrapper direction={defaultDirection}>
            {mode === PROPERTIES_DRAWER_MODE.gameInfo && (
              <EditGameInfoContainer close={close} />
            )}
          </PropertiesDrawerWrapper>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export { PropertiesDrawerView };
