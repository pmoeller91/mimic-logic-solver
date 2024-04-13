import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { PropertiesDrawerView } from './PropertiesDrawerView';
import {
  propertiesDrawerDescriptionIdAtom,
  propertiesDrawerIdAtom,
  propertiesDrawerModeAtom,
  propertiesDrawerOpenAtom,
  propertiesDrawerOpeningElementAtom,
  propertiesDrawerTitleIdAtom,
} from './propertiesDrawerAtoms';
import { BREAKPOINT, useBreakpoint } from '@/hooks/useBreakpoint';
import { useCallback } from 'use-memo-one';
import { ComponentProps, useEffect } from 'react';
import { useStableId } from '@/hooks/useStableId';

function PropertiesDrawerContainer() {
  const [propertiesDrawerOpen, setPropertiesDrawerOpen] = useAtom(
    propertiesDrawerOpenAtom
  );
  const propertiesDrawerMode = useAtomValue(propertiesDrawerModeAtom);
  const largeBreakpoint = useBreakpoint(BREAKPOINT.lg);
  const titleId = useAtomValue(propertiesDrawerTitleIdAtom);
  const descriptionId = useAtomValue(propertiesDrawerDescriptionIdAtom);
  const openingElement = useAtomValue(propertiesDrawerOpeningElementAtom);
  const setPropertiesDrawerId = useSetAtom(propertiesDrawerIdAtom);

  const onClose = useCallback(() => {
    setPropertiesDrawerOpen(false);
  }, [setPropertiesDrawerOpen]);

  const onCloseAutoFocus: Exclude<
    ComponentProps<typeof PropertiesDrawerView>['onCloseAutoFocus'],
    undefined
  > = useCallback(
    (e) => {
      openingElement.current?.focus({ focusVisible: true } as FocusOptions);
      e.preventDefault();
    },
    [openingElement]
  );

  const propertiesDrawerIdSufix = useStableId();
  const propertiesDrawerId = `properties-drawer-${propertiesDrawerIdSufix}`;

  useEffect(() => {
    setPropertiesDrawerId(propertiesDrawerId);
  }, [propertiesDrawerId, setPropertiesDrawerId]);

  return (
    <PropertiesDrawerView
      isOpen={propertiesDrawerOpen}
      onOpenChange={setPropertiesDrawerOpen}
      direction={largeBreakpoint ? 'right' : 'bottom'}
      mode={propertiesDrawerMode}
      onClose={onClose}
      titleId={titleId}
      descriptionId={descriptionId}
      onCloseAutoFocus={onCloseAutoFocus}
      propertiesDrawerId={propertiesDrawerId}
    />
  );
}

export { PropertiesDrawerContainer };
