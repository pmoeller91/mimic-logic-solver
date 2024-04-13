import { SiteFooterContainer } from './components/site-footer/SiteFooterContainer';
import { PropertiesDrawerContainer } from './components/properties-drawer/PropertiesDrawerContainer';
import { CenterPanel } from './components/center-panel/CenterPanel';
import { SiteHeader } from './components/site-header/SiteHeader';

function App() {
  return (
    <>
      <div className="min-h-screen container bg-bg-dark flex flex-col shadow-2xl shadow-black/70">
        <SiteHeader />
        <CenterPanel />
        <SiteFooterContainer />
      </div>
      <PropertiesDrawerContainer />
    </>
  );
}

export default App;
