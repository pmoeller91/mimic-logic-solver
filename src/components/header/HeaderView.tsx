import { EditGameSettingsButtonContainer } from '../edit-game-info-button/EditGameInfoButtonContainer';
import { HeaderItem } from './HeaderItem';

interface HeaderViewProps {
  gameModeHeader: string;
  gameMode: string;
  chestsHeader: string;
  chests: string;
  mimicsHeader: string;
  mimics: string;
  goldHeader: string;
  gold: string;
  gearHeader: string;
  gear: string;
  itemsHeader: string;
  items: string;
}

function HeaderView({
  gameModeHeader,
  gameMode,
  chestsHeader,
  chests,
  mimicsHeader,
  mimics,
  goldHeader,
  gold,
  gearHeader,
  gear,
  itemsHeader,
  items,
}: HeaderViewProps) {
  return (
    <header className="bg-pd">
      <h1 className="text-base sm:text-xl md:text-3xl  px-8 py-2 bg-bg-dark-primary">
        Mimic Logic Solver
      </h1>
      <div className="grid grid-cols-3 md:flex md:flex-row text-s md:text-base gap-4 md:gap-8 lg:gap-16 py-4 px-8">
        <HeaderItem title={gameModeHeader} value={gameMode} />
        <HeaderItem title={chestsHeader} value={chests} />
        <HeaderItem title={mimicsHeader} value={mimics} />
        <HeaderItem title={goldHeader} value={gold} />
        <HeaderItem title={gearHeader} value={gear} />
        <HeaderItem title={itemsHeader} value={items} />
        <EditGameSettingsButtonContainer className="col-span-3 md:col-span-1" />
      </div>
    </header>
  );
}

export { HeaderView };
