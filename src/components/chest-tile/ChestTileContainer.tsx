import { Chest } from '@/types/chest';
import { ChestTileView } from './ChestTileView';
import { useTranslation } from 'react-i18next';
import { getGameTranslation } from '@/util/getGameTranslation';
import { TRANSLATION_TYPE } from '@/types/translation';
import { useMemo } from 'react';

interface ChestTileContainerProps {
  chest: Chest;
  showContents?: boolean;
  showHint?: boolean;
}

function ChestTileContainer({
  chest,
  showContents,
  showHint,
}: ChestTileContainerProps) {
  const defaultShowHint = showHint ?? true;
  const defaultShowContents = showContents ?? true;
  const { t } = useTranslation();
  const contains = t('chestTile.contains');
  const chestContents = useMemo(
    () =>
      defaultShowContents && chest.contents
        ? getGameTranslation({
            type: TRANSLATION_TYPE.chestContents,
            key: chest.contents,
            t,
          })
        : undefined,
    [chest.contents, defaultShowContents, t]
  );

  return (
    <ChestTileView
      chestColor={chest.color}
      chestContents={chestContents}
      chestHint={defaultShowHint && chest.hint ? chest.hint.type : undefined}
      contains={contains}
    />
  );
}

export { ChestTileContainer };
