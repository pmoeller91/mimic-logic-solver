import { ChestColor } from '@/types/chestProperties';
import { ChestIcon } from '@/components/ChestIcon';
import clsx from 'clsx';

interface ChestTileViewProps {
  chestColor: ChestColor;
  chestContents?: string;
  chestHint?: string;
  containsLabel: string;
  className?: string;
  onClickEdit?: () => void;
  editButtonLabel: string;
  iconAltText: string;
  hideEditButton?: boolean;
}

function ChestTileView({
  chestColor,
  chestContents,
  chestHint,
  containsLabel,
  className,
  onClickEdit,
  editButtonLabel,
  iconAltText,
  hideEditButton,
}: ChestTileViewProps) {
  const classNames = clsx('', className);
  return (
    <div className={classNames}>
      <div className="flex flex-col gap-4 p-4 items-center justify-between bg-bg-light/60 rounded-xl h-full w-full">
        {chestHint && <div className="text-center my-auto">{chestHint}</div>}
        <ChestIcon
          chestColor={chestColor}
          className="w-24 h-24 p-2 pointer-events-none"
          altText={iconAltText}
        />
        {chestContents && (
          <div className="flex flex-col justify-center items-center">
            <div>{containsLabel}</div>
            <div>{chestContents}</div>
          </div>
        )}
        {!hideEditButton && (
          <button className="w-full" onClick={onClickEdit}>
            {editButtonLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export { ChestTileView };
