import { ChestColor } from '@/types/chestProperties';
import { ChestIcon } from '@/components/ChestIcon';
import clsx from 'clsx';

interface ChestTileViewProps {
  chestColor: ChestColor;
  chestContents?: string;
  chestHint?: string;
  contains: string;
  className?: string;
}

function ChestTileView({
  chestColor,
  chestContents,
  chestHint,
  contains,
  className,
}: ChestTileViewProps) {
  const classNames = clsx('', className);
  return (
    <div className={classNames}>
      <div className="flex flex-col gap-4 p-4 items-center justify-between bg-bg-light/60 rounded-xl h-full w-full">
        {chestHint && (
          <div className="text-center break-words max-w-48 my-auto">
            {chestHint}
          </div>
        )}
        <ChestIcon color={chestColor} className="w-24 h-24 p-2" />
        {chestContents && (
          <div className="flex flex-col justify-center items-center">
            <div>{contains}</div>
            <div>{chestContents}</div>
          </div>
        )}
        <button className="w-full">Edit</button>
      </div>
    </div>
  );
}

export { ChestTileView };
