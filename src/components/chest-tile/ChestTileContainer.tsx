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
}

function ChestTileContainer({
  chest,
  showContents,
  showHint,
  className
}: ChestTileContainerProps) {
  const defaultShowHint = showHint ?? true;
  const defaultShowContents = showContents ?? true;
  const { t } = useTranslation();
  const contains = t('chestTile.contains');
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

  return (
    <ChestTileView
      chestColor={chest.color}
      chestContents={defaultShowContents ? chestContents : undefined}
      chestHint={defaultShowHint ? chestHint : undefined}
      contains={contains}
      className={className}
    />
  );
}

export { ChestTileContainer };
