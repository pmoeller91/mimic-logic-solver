import { abort } from '@/solver-bridge/solverBridge';
import { SolutionPanel } from '../solution-panel/SolutionPanel';
import { SolveButtonContainer } from '../solve-button/SolveButtonContainer';
import { MainChestGrid } from './MainChestGrid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GameInfoHeaderContainer } from '../game-info-header/GameInfoHeaderContainer';

function CenterPanel() {
  return (
    <div className="flex flex-grow flex-col">
      <GameInfoHeaderContainer />
      <Tabs className="mt-2 flex flex-col flex-grow">
        <TabList>
          <Tab>Game Field</Tab>
          <Tab>Solution</Tab>
        </TabList>
        <TabPanel
          forceRender
          className="flex flex-col flex-grow react-tabs__tab-panel"
        >
          <MainChestGrid />
        </TabPanel>
        <TabPanel>
          <SolutionPanel />
        </TabPanel>
      </Tabs>
      <div className="flex flex-row-reverse p-4 gap-4 bg-pd">
        <SolveButtonContainer />
        <button
          onClick={() => {
            abort();
          }}
        >
          Abort
        </button>
      </div>
    </div>
  );
}

export { CenterPanel };
