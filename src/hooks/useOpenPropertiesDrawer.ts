import {
  propertiesDrawerModeAtom,
  propertiesDrawerOpenAtom,
} from "@/components/properties-drawer/propertiesDrawerAtoms";
import { PropertiesDrawerMode } from "@/types/propertiesDrawer";
import { useSetAtom } from "jotai";
import { useCallback } from "react";

interface UseOpenPropertiesDrawerParams {
  mode: PropertiesDrawerMode;
}

function useOpenPropertiesDrawer({ mode }: UseOpenPropertiesDrawerParams) {
  const setPropertiesDrawerOpen = useSetAtom(propertiesDrawerOpenAtom);
  const setPropertiesDrawerMode = useSetAtom(propertiesDrawerModeAtom);
  return useCallback(() => {
    setPropertiesDrawerOpen(true);
    setPropertiesDrawerMode(mode);
  }, [setPropertiesDrawerOpen, setPropertiesDrawerMode, mode]);
}

export { useOpenPropertiesDrawer };
