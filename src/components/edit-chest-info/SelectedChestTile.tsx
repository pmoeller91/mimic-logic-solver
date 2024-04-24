import { useAtomValue } from 'jotai';
import { ChestTileContainer } from '../chest-tile/ChestTileContainer';
import { selectedChestAtomAtom } from '@/atoms/selectedChestAtomAtom';

interface SelectedChestTileProps {
  className?: string;
}

function SelectedChestTile({ className }: SelectedChestTileProps) {
  const selectedChestAtom = useAtomValue(selectedChestAtomAtom);
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
