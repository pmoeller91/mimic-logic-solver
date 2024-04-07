import { ChestGrid } from './components/chest-grid/ChestGrid';
import { FooterContainer } from './components/footer/FooterContainer';
import { HeaderContainer } from './components/header/HeaderContainer';
import { PropertiesDrawerContainer } from './components/properties-drawer/PropertiesDrawerContainer';
import { useAtomValue } from 'jotai';
import { derivedChestGridAtom } from './atoms/derivedChestGridAtom';

function App() {
  const chestGrid = useAtomValue(derivedChestGridAtom);
  return (
    <>
      <div className="min-h-screen container bg-bg-dark flex flex-col">
        <HeaderContainer />
        <ChestGrid grid={chestGrid} />
        <FooterContainer className="mt-auto" />
      </div>
      <PropertiesDrawerContainer />
    </>
  );
}

export default App;
