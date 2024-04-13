import { useOpenPropertiesDrawer } from '@/hooks/useOpenPropertiesDrawer';
import { OpenPropertiesDrawerButtonView } from './OpenPropertiesDrawerButtonView';
import { PropertiesDrawerMode } from '@/types/propertiesDrawer';
import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'use-memo-one';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  propertiesDrawerIdAtom,
  propertiesDrawerOpenAtom,
  propertiesDrawerOpeningElementAtom,
} from '../properties-drawer/propertiesDrawerAtoms';

interface OpenPropertiesDrawerButtonContainerProps {
  className?: string;
  mode: PropertiesDrawerMode;
  children?: React.ReactNode;
  onOpen?: () => void;
}

function OpenPropertiesDrawerButtonContainer({
  className,
  mode,
  children,
  onOpen,
}: OpenPropertiesDrawerButtonContainerProps) {
  const [isOpenedBySelf, setIsOpenedBySelf] = useState(false);
  const propertiesDrawerOpen = useAtomValue(propertiesDrawerOpenAtom);
  const setPropertiesDrawerOpeningElement = useSetAtom(
    propertiesDrawerOpeningElementAtom
  );
  const openPropertiesDrawer = useOpenPropertiesDrawer({
    mode,
  });

  const propertiesDrawerId = useAtomValue(propertiesDrawerIdAtom);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleOnClick = useCallback(() => {
    setIsOpenedBySelf(true);
    openPropertiesDrawer();
    setPropertiesDrawerOpeningElement(buttonRef);
    onOpen?.();
  }, [openPropertiesDrawer, setPropertiesDrawerOpeningElement, onOpen]);

  useEffect(() => {
    if (isOpenedBySelf && !propertiesDrawerOpen) {
      setIsOpenedBySelf(false);
    }
  }, [isOpenedBySelf, propertiesDrawerOpen]);

  return (
    <OpenPropertiesDrawerButtonView
      handleOnClick={handleOnClick}
      className={className}
      isOpen={isOpenedBySelf}
      propertiesDrawerId={propertiesDrawerId}
      ref={buttonRef}
    >
      {children}
    </OpenPropertiesDrawerButtonView>
  );
}

export { OpenPropertiesDrawerButtonContainer };
