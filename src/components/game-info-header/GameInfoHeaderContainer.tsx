import { GameInfoHeaderView } from './GameInfoHeaderView';
import { mapValues } from 'lodash-es';
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
import { gameModeAtom } from '@/atoms/gameModeAtom';

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
  const gameMode = useAtomValue(gameModeAtom);
  const numMimics = useAtomValue(numMimicsAtom);
  const numGear = useAtomValue(numGearAtom);
  const numGold = useAtomValue(numGoldAtom);
  const numItems = useAtomValue(numItemsAtom);

  const gameModeTranslation = useMemo(
    () =>
      getGameTranslation({
        type: TRANSLATION_TYPE.gameMode,
        key: gameMode,
        t,
      }),
    [t, gameMode]
  );

  const unknownHeaderValue = t('header.unknownValue');

  const numChestsTranslation = useAtomValue(numChestsAtom).toString();

  let numMimicsTranslation = '';
  let numGearTranslation = '';
  let numGoldTranslation = '';
  let numItemsTranslation = '';

  if (gameMode === GAME_MODE.random) {
    numMimicsTranslation = unknownHeaderValue;
    numGearTranslation = unknownHeaderValue;
    numGoldTranslation = unknownHeaderValue;
    numItemsTranslation = unknownHeaderValue;
  } else {
    numMimicsTranslation = numMimics.toString();
    numGearTranslation = numGear?.toString() ?? unknownHeaderValue;
    numGoldTranslation = numGold?.toString() ?? unknownHeaderValue;
    numItemsTranslation = numItems?.toString() ?? unknownHeaderValue;
  }

  return (
    <GameInfoHeaderView
      gameModeHeader={translatedHeaders.gameMode}
      gameMode={gameModeTranslation}
      chestsHeader={translatedHeaders.chests}
      chests={numChestsTranslation}
      gearHeader={translatedHeaders.gear}
      gear={numGearTranslation}
      goldHeader={translatedHeaders.gold}
      gold={numGoldTranslation}
      itemsHeader={translatedHeaders.items}
      items={numItemsTranslation}
      mimicsHeader={translatedHeaders.mimics}
      mimics={numMimicsTranslation.toString()}
    />
  );
}

export { GameInfoHeaderContainer };
