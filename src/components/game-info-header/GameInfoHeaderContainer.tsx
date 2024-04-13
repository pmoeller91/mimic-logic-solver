import { GameInfoHeaderView } from './GameInfoHeaderView';
import { mapValues } from 'lodash';
import { useMemo } from 'react';
import { TRANSLATION_TYPE } from '@/types/translation';
import { GAME_MODE } from '@/types/gameMode';
import { useTranslation } from 'react-i18next';
import { getGameTranslation } from '@/util/getGameTranslation';
import { useAtomValue } from 'jotai';
import { numMimicsAtom } from '@/atoms/numMimicsFormValueAtom';
import { numGoldAtom } from '@/atoms/numGoldFormValueAtom';
import { numItemsAtom } from '@/atoms/numItemsFormValueAtom';
import { numChestsAtom } from '@/atoms/numChestsAtom';
import { numGearAtom } from '@/atoms/numGearFormValueAtom';

const headerTranslationKeys = {
  gameMode: 'header.gameMode',
  chests: 'header.chests',
  mimics: 'header.mimics',
  gold: 'header.gold',
  gear: 'header.gear',
  items: 'header.items',
};

function GameInfoHeaderContainer() {
  const { t } = useTranslation();
  const translatedHeaders = useMemo(
    () => mapValues(headerTranslationKeys, (key) => t(key)),
    [t]
  );
  const gameMode = useMemo(
    () =>
      getGameTranslation({
        type: TRANSLATION_TYPE.gameMode,
        key: GAME_MODE.standard,
        t,
      }),
    [t]
  );

  const unknownHeaderValue = t('header.unknownValue');

  const numMimics = useAtomValue(numMimicsAtom);
  const numGear = useAtomValue(numGearAtom)?.toString() ?? unknownHeaderValue;
  const numGold = useAtomValue(numGoldAtom)?.toString() ?? unknownHeaderValue;
  const numItems = useAtomValue(numItemsAtom)?.toString() ?? unknownHeaderValue;
  const numChests = useAtomValue(numChestsAtom).toString();

  return (
    <GameInfoHeaderView
      gameModeHeader={translatedHeaders.gameMode}
      gameMode={gameMode}
      chestsHeader={translatedHeaders.chests}
      chests={numChests}
      gearHeader={translatedHeaders.gear}
      gear={numGear}
      goldHeader={translatedHeaders.gold}
      gold={numGold}
      itemsHeader={translatedHeaders.items}
      items={numItems}
      mimicsHeader={translatedHeaders.mimics}
      mimics={numMimics.toString()}
    />
  );
}

export { GameInfoHeaderContainer };
