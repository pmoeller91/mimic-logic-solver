import { EditGameSettingsButtonContainer } from "../edit-game-info-button/EditGameInfoButtonContainer";
import { HeaderItem } from "./HeaderItem";

interface GameInfoHeaderViewProps {
  chests: string;
  chestsHeader: string;
  gameMode: string;
  gameModeHeader: string;
  gear: string;
  gearHeader: string;
  gold: string;
  goldHeader: string;
  items: string;
  itemsHeader: string;
  mimics: string;
  mimicsHeader: string;
  robbers: string;
  robbersHeader: string;
  showRobbers?: boolean;
}

function GameInfoHeaderView({
  chests,
  chestsHeader,
  gameMode,
  gameModeHeader,
  gear,
  gearHeader,
  gold,
  goldHeader,
  items,
  itemsHeader,
  mimics,
  mimicsHeader,
  robbers,
  robbersHeader,
  showRobbers,
}: GameInfoHeaderViewProps) {
  return (
    <div className="bg-pd grid grid-cols-1 md:flex md:flex-row relative">
      <dl className="grid grid-cols-3 md:flex md:flex-row text-s md:text-base gap-4 md:gap-8 lg:gap-16 mx-8 py-4 md:mr-auto">
        <HeaderItem title={gameModeHeader} value={gameMode} />
        <HeaderItem title={chestsHeader} value={chests} valueClassName="font-mono" />
        <HeaderItem title={mimicsHeader} value={mimics} valueClassName="font-mono" />
        {showRobbers && <HeaderItem title={robbersHeader} value={robbers} valueClassName="font-mono" />}
        <HeaderItem title={goldHeader} value={gold} valueClassName="font-mono" />
        <HeaderItem title={gearHeader} value={gear} valueClassName="font-mono" />
        <HeaderItem title={itemsHeader} value={items} valueClassName="font-mono" />
      </dl>
      <EditGameSettingsButtonContainer className="m-4" />
    </div>
  );
}

export { GameInfoHeaderView };
