import {
  PROPERTIES_DRAWER_MODE,
  PropertiesDrawerMode,
} from '@/types/propertiesDrawer';
import { atom } from 'jotai';
import { RefObject } from 'react';

const propertiesDrawerOpenAtom = atom(false);

const propertiesDrawerModeAtom = atom<PropertiesDrawerMode>(
  PROPERTIES_DRAWER_MODE.gameInfo
);

const propertiesDrawerTitleIdAtom = atom('properties-drawer-title');

const propertiesDrawerDescriptionIdAtom = atom('properties-drawer-description');

const propertiesDrawerOpeningElementAtom = atom<RefObject<HTMLElement>>({
  current: null,
});

const propertiesDrawerIdAtom = atom('');

export {
  propertiesDrawerModeAtom,
  propertiesDrawerOpenAtom,
  propertiesDrawerTitleIdAtom,
  propertiesDrawerDescriptionIdAtom,
  propertiesDrawerOpeningElementAtom,
  propertiesDrawerIdAtom,
};
