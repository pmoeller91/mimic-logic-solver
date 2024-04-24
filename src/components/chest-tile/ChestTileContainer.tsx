import { Chest } from '@/types/chest';
import { ChestTileView } from './ChestTileView';
import { useTranslation } from 'react-i18next';
import { getGameTranslation } from '@/util/getGameTranslation';
import { TRANSLATION_TYPE } from '@/types/translation';
import { ChestLocation } from '@/types/chestLocation';
import { useSetAtom } from 'jotai';
import { selectedChestLocationAtom } from '@/atoms/selectedChestLocationAtom';
import { useCallback } from 'use-memo-one';

interface ChestTileContainerProps {
  chest: Chest;
  className?: string;
  hideEditButton?: boolean;
  contextLabel?: string;
  location?: ChestLocation;
}

interface ChestTileContainerPropsWithEdit extends ChestTileContainerProps {
  hideEditButton?: false;
  location: ChestLocation;
}

interface ChestTileContainerPropsWithoutEdit extends ChestTileContainerProps {
  hideEditButton: true;
  location?: ChestLocation;
}

const validCoordinates = [0, 1, 2] as const;
const isValidLocation = (
  location: ChestLocation
): location is [0 | 1 | 2, 0 | 1 | 2] =>
  location.every((coordinate) =>
    validCoordinates.includes(coordinate as 0 | 1 | 2)
  );

function ChestTileContainer(
  props: ChestTileContainerPropsWithEdit
): JSX.Element;
function ChestTileContainer(
  props: ChestTileContainerPropsWithoutEdit
): JSX.Element;
function ChestTileContainer({
  chest,
  className,
  hideEditButton,
  contextLabel,
  location,
}: ChestTileContainerProps) {
  const { t } = useTranslation();
  const containsLabel = t('chestTile.containsLabel');
  const editButtonLabel = t('chestTile.editButtonLabel');
  const chestContents = getGameTranslation({
    type: TRANSLATION_TYPE.chestContents,
    key: chest.contents,
    t,
  });
  const chestHint = getGameTranslation({
    type: TRANSLATION_TYPE.chestHint,
    key: chest.hint,
    t,
  });
  const iconAltText = t('chestTile.iconAltText', { color: chest.color });
  const setSelectedChest = useSetAtom(selectedChestLocationAtom);

  const selectChest = useCallback(() => {
    if (location && isValidLocation(location)) {
      setSelectedChest(location);
    }
  }, [location, setSelectedChest]);

  return (
    <ChestTileView
      chestColor={chest.color}
      chestContents={chestContents}
      chestHint={chestHint}
      containsLabel={containsLabel}
      editButtonLabel={editButtonLabel}
      className={className}
      iconAltText={iconAltText}
      hideEditButton={hideEditButton}
      contextLabel={contextLabel}
      selectChest={selectChest}
    />
  );
}

export { ChestTileContainer };
