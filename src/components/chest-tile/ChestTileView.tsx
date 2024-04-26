import { ChestColor } from '@/types/chestColor';
import { ChestIcon } from '@/components/ChestIcon';
import clsx from 'clsx';
import { OpenPropertiesDrawerButtonContainer } from '../properties-drawer/OpenPropertiesDrawerButtonContainer';
import { PROPERTIES_DRAWER_MODE } from '@/types/propertiesDrawer';

interface ChestTileViewProps {
  chestColor: ChestColor;
  chestContents?: string;
  chestHint?: string;
  containsLabel: string;
  className?: string;
  editButtonLabel: string;
  iconAltText: string;
  hideEditButton?: boolean;
  contextLabel?: string;
  selectChest: () => void;
}

function ChestTileView({
  chestColor,
  chestContents,
  chestHint,
  containsLabel,
  className,
  editButtonLabel,
  iconAltText,
  hideEditButton,
  contextLabel,
  selectChest,
}: ChestTileViewProps) {
  const classNames = clsx('', className);
  return (
    <div className={classNames}>
      <div className="flex flex-col gap-4 p-4 items-center justify-between bg-bg-light/60 rounded-xl h-full w-full">
        <div className="sr-only">{contextLabel}</div>
        <div className="text-center my-auto">{chestHint}</div>
        <ChestIcon
          chestColor={chestColor}
          className="w-24 h-24 p-2 pointer-events-none"
          alt={iconAltText}
          aria-hidden="true"
        />
        <div className="flex flex-col justify-center items-center">
          <div>{containsLabel}</div>
          <div>{chestContents}</div>
        </div>
        {!hideEditButton && (
          <OpenPropertiesDrawerButtonContainer
            mode={PROPERTIES_DRAWER_MODE.chest}
            onOpen={selectChest}
            className="w-full"
          >
            {editButtonLabel}
          </OpenPropertiesDrawerButtonContainer>
        )}
      </div>
    </div>
  );
}

export { ChestTileView };
