import { SolutionPanel } from '../solution-panel/SolutionPanel';
import { SolveButtonContainer } from '../solve-button/SolveButtonContainer';
import { MainChestGrid } from './MainChestGrid';
import { Tab, Tabs, TabList, TabPanel, TabsProps } from 'react-tabs';
import { GameInfoHeaderContainer } from '../game-info-header/GameInfoHeaderContainer';
import { useAtom } from 'jotai';
import { selectedTabAtom } from '@/atoms/selectedTabAtom';
import { useCallback } from 'use-memo-one';
import { MAIN_TAB, MainTab } from '@/types/mainTab';
import { invert } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { ResetPuzzleButton } from '../reset-puzzle-button/ResetPuzzleButton';

const tabIndexes: Record<MainTab, number> = {
  [MAIN_TAB.gameField]: 0,
  [MAIN_TAB.solution]: 1,
};

const reverseTabIndexes = invert(tabIndexes) as Record<number, MainTab>;

function CenterPanel() {
  const [selectedTab, setSelectedTab] = useAtom(selectedTabAtom);
  const handleOnSelect = useCallback<Exclude<TabsProps['onSelect'], undefined>>(
    (index) => {
      setSelectedTab(reverseTabIndexes[index]);
    },
    [setSelectedTab]
  );
  const { t } = useTranslation();
  const gameFieldLabel = t('centerPanel.gameFieldLabel');
  const solutionLabel = t('centerPanel.solutionLabel');
  return (
    <div className="flex flex-grow flex-col bg-bg-light/60">
      <GameInfoHeaderContainer />
      <Tabs
        className="mt-2 flex flex-col flex-grow"
        onSelect={handleOnSelect}
        selectedIndex={tabIndexes[selectedTab]}
      >
        <TabList>
          <Tab>{gameFieldLabel}</Tab>
          <Tab>{solutionLabel}</Tab>
        </TabList>
        <TabPanel forceRender>
          <MainChestGrid />
        </TabPanel>
        <TabPanel>
          <SolutionPanel />
        </TabPanel>
      </Tabs>
      <div className="flex flex-row justify-end p-4 gap-4 bg-pd">
        <ResetPuzzleButton />
        <SolveButtonContainer />
      </div>
    </div>
  );
}

export { CenterPanel };
