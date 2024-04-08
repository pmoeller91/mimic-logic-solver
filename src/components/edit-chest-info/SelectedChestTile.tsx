import { useSelectedChestAtom } from '@/hooks/useSelectedChestAtom';
import { useAtomValue } from 'jotai';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';

interface SelectedChestTileProps {
  className?: string;
}

function SelectedChestTile({ className }: SelectedChestTileProps) {
  const selectedChestAtom = useSelectedChestAtom();
  const selectedChest = useAtomValue(selectedChestAtom);

  return (
    <ChestTileContainer
      chest={selectedChest}
      className={className}
      hideEditButton
    />
  );
}

export { SelectedChestTile };
