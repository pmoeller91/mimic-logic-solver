import { FooterContainer } from './components/footer/FooterContainer';
import { HeaderContainer } from './components/header/HeaderContainer';
import { PropertiesDrawerContainer } from './components/properties-drawer/PropertiesDrawerContainer';
import { CenterPanel } from './components/center-panel/CenterPanel';

function App() {
  return (
    <>
      <div className="min-h-screen container bg-bg-dark flex flex-col">
        <HeaderContainer />
        <CenterPanel />
        <FooterContainer className="mt-auto" />
      </div>
      <PropertiesDrawerContainer />
    </>
  );
}

export default App;
