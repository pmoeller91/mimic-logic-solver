import { CenterPanelFallback } from "./components/center-panel/CenterPanelFallback";
import { SiteFooterContainer } from "./components/site-footer/SiteFooterContainer";
import { SiteHeader } from "./components/site-header/SiteHeader";
import { Suspense, lazy } from "react";

const PropertiesDrawerContainer = lazy(async () => ({
  default: (await import("@/components/properties-drawer/PropertiesDrawerContainer"))
    .PropertiesDrawerContainer,
}));

const CenterPanel = lazy(async () => ({
  default: (await import("@/components/center-panel/CenterPanel")).CenterPanel,
}));

function App() {
  return (
    <>
      <div className="min-h-screen container bg-bg-dark flex flex-col shadow-2xl shadow-black/70">
        <SiteHeader />
        <Suspense fallback={<CenterPanelFallback />}>
          <CenterPanel />
        </Suspense>
        <SiteFooterContainer />
      </div>
      <Suspense>
        <PropertiesDrawerContainer />
      </Suspense>
    </>
  );
}

export default App;
