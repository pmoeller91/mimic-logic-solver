import { MainChestGrid } from './MainChestGrid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function CenterPanel() {
  return (
    <Tabs className="mt-2 flex-grow flex flex-col">
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
      <TabPanel>None yet</TabPanel>
    </Tabs>
  );
}

export { CenterPanel };
