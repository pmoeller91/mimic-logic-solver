import { ChestColor } from '@/types/chestProperties';
import { ChestIcon } from '@/components/ChestIcon';

interface ChestTileViewProps {
  chestColor: ChestColor;
  chestContents?: string;
  chestHint?: string;
  contains: string;
}

function ChestTileView({
  chestColor,
  chestContents,
  chestHint,
  contains,
}: ChestTileViewProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-16">
      {chestHint && <div>{chestHint}</div>}
      <ChestIcon color={chestColor} className="w-16 h-16" />
      {chestContents && (
        <>
          <div>{contains}</div>
          <div>{chestContents}</div>
        </>
      )}
    </div>
  );
}

export { ChestTileView };
