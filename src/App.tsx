import { useTranslation } from 'react-i18next';
import { ChestGrid } from './components/chest-grid/ChestGrid';
import { FooterContainer } from './components/footer/FooterContainer';
import { HeaderContainer } from './components/header/HeaderContainer';
import { LanguageSwitcher } from './components/language-switcher/LanguageSwitcher';
import { MiniChestGrid } from './components/mini-chest-grid/MiniChestGrid';
import { PropertiesDrawerContainer } from './components/properties-drawer/PropertiesDrawerContainer';
import { CHEST_CONTENTS } from './types/chestProperties';
import { TRANSLATION_TYPE } from './types/translation';
import { createChestGrid } from './util/chest-grid/createChestGrid';
import { getGameTranslation } from './util/getGameTranslation';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen container bg-bg-dark flex flex-col">
        <HeaderContainer />
        <div className="p-8">
          <LanguageSwitcher />
        </div>
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <MiniChestGrid grid={createChestGrid({ numChests: 4 })} />
          <MiniChestGrid grid={createChestGrid({ numChests: 6 })} />
          <MiniChestGrid grid={createChestGrid({ numChests: 7 })} />
          <MiniChestGrid grid={createChestGrid({ numChests: 9 })} />
        </div>
        <div className="mt-4 flex flex-row flex-wrap gap-16 justify-center items-center">
          <ChestGrid grid={createChestGrid({ numChests: 4 })} />
          <ChestGrid grid={createChestGrid({ numChests: 6 })} />
          <ChestGrid grid={createChestGrid({ numChests: 7 })} />
          <ChestGrid grid={createChestGrid({ numChests: 9 })} />
        </div>
        <div>
          {getGameTranslation({
            type: TRANSLATION_TYPE.chestContents,
            key: [CHEST_CONTENTS.gear, CHEST_CONTENTS.gold],
            t,
          })}
        </div>
        <FooterContainer className="mt-auto" />
      </div>
      <PropertiesDrawerContainer />
    </>
  );
}

export default App;
