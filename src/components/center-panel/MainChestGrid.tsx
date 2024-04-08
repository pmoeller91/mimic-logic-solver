import { derivedChestGridAtom } from '@/atoms/derivedChestGridAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { ChestGrid, OnClickEditCallback } from '../chest-grid/ChestGrid';
import { useCallback } from 'use-memo-one';
import { selectedChestAtom } from '@/atoms/selectedChestAtom';
import { useOpenPropertiesDrawer } from '@/hooks/useOpenPropertiesDrawer';
import { PROPERTIES_DRAWER_MODE } from '@/types/propertiesDrawer';

function MainChestGrid() {
  const chestGrid = useAtomValue(derivedChestGridAtom);
  const setSelectedChestAtom = useSetAtom(selectedChestAtom);
  const openEditChest = useOpenPropertiesDrawer({
    mode: PROPERTIES_DRAWER_MODE.chest,
  });
  const handleOnClickEdit = useCallback<OnClickEditCallback>(
    (row, col) => {
      setSelectedChestAtom([row, col]);
      openEditChest();
    },
    [setSelectedChestAtom, openEditChest]
  );
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <ChestGrid grid={chestGrid} onClickEdit={handleOnClickEdit} />
    </div>
  );
}

export { MainChestGrid };
