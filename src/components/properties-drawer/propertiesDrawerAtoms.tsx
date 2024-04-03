import {
  PROPERTIES_DRAWER_MODE,
  PropertiesDrawerMode,
} from '@/types/propertiesDrawer';
import { atom } from 'jotai';

const propertiesDrawerOpenAtom = atom(false);

const propertiesDrawerModeAtom = atom<PropertiesDrawerMode>(
  PROPERTIES_DRAWER_MODE.gameInfo
);

export { propertiesDrawerModeAtom, propertiesDrawerOpenAtom };
