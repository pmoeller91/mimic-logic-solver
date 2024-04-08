import { Chest } from '@/types/chest';
import { ChestTileView } from './ChestTileView';
import { useTranslation } from 'react-i18next';
import { getGameTranslation } from '@/util/getGameTranslation';
import { TRANSLATION_TYPE } from '@/types/translation';

interface ChestTileContainerProps {
  chest: Chest;
  showContents?: boolean;
  showHint?: boolean;
  className?: string;
  onClickEdit?: () => void;
  hideEditButton?: boolean;
}

function ChestTileContainer({
  chest,
  showContents,
  showHint,
  className,
  onClickEdit,
  hideEditButton,
}: ChestTileContainerProps) {
  const defaultShowHint = showHint ?? true;
  const defaultShowContents = showContents ?? true;
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

  return (
    <ChestTileView
      chestColor={chest.color}
      chestContents={defaultShowContents ? chestContents : undefined}
      chestHint={defaultShowHint ? chestHint : undefined}
      containsLabel={containsLabel}
      editButtonLabel={editButtonLabel}
      className={className}
      onClickEdit={onClickEdit}
      iconAltText={iconAltText}
      hideEditButton={hideEditButton}
    />
  );
}

export { ChestTileContainer };
