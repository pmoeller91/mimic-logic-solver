import { useAtom, useAtomValue } from 'jotai';
import { PropertiesDrawerView } from './PropertiesDrawerView';
import {
  propertiesDrawerModeAtom,
  propertiesDrawerOpenAtom,
} from './propertiesDrawerAtoms';
import { BREAKPOINT, useBreakpoint } from '@/hooks/useBreakpoint';
import { useCallback } from 'use-memo-one';

function PropertiesDrawerContainer() {
  const [propertiesDrawerOpen, setPropertiesDrawerOpen] = useAtom(
    propertiesDrawerOpenAtom
  );
  const propertiesDrawerMode = useAtomValue(propertiesDrawerModeAtom);
  const largeBreakpoint = useBreakpoint(BREAKPOINT.lg);
  const close = useCallback(() => {
    setPropertiesDrawerOpen(false);
  }, [setPropertiesDrawerOpen]);
  return (
    <PropertiesDrawerView
      isOpen={propertiesDrawerOpen}
      onOpenChange={setPropertiesDrawerOpen}
      direction={largeBreakpoint ? 'right' : 'bottom'}
      mode={propertiesDrawerMode}
      close={close}
    />
  );
}

export { PropertiesDrawerContainer };
