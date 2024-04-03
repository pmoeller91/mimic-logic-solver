import { HeaderView } from './HeaderView';
import { mapValues } from 'lodash';
import { useMemo } from 'react';
import { TRANSLATION_TYPE } from '@/types/translation';
import { GAME_MODE } from '@/types/gameMode';
import { useTranslation } from 'react-i18next';
import { getGameTranslation } from '@/util/getGameTranslation';
import { useAtomValue } from 'jotai';
import { numMimicsAtom } from '@/atoms/numMimicsFormValueAtom';

const headerTranslationKeys = {
  gameMode: 'header.gameMode',
  chests: 'header.chests',
  mimics: 'header.mimics',
  gold: 'header.gold',
  gear: 'header.gear',
  items: 'header.items',
};

function HeaderContainer() {
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

  const numMimics = useAtomValue(numMimicsAtom);

  return (
    <HeaderView
      gameModeHeader={translatedHeaders.gameMode}
      gameMode={gameMode}
      chestsHeader={translatedHeaders.chests}
      chests="0"
      gearHeader={translatedHeaders.gear}
      gear="1"
      goldHeader={translatedHeaders.gold}
      gold="2"
      itemsHeader={translatedHeaders.items}
      items="3"
      mimicsHeader={translatedHeaders.mimics}
      mimics={numMimics.toString()}
    />
  );
}

export { HeaderContainer };
