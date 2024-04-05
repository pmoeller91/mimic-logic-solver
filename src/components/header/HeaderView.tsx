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
      <div className="grid grid-cols-1 md:flex md:flex-row">
        <dl className="grid grid-cols-3 md:flex md:flex-row text-s md:text-base gap-4 md:gap-8 lg:gap-16 mx-8 py-4 mr-auto">
          <HeaderItem title={gameModeHeader} value={gameMode} />
          <HeaderItem
            title={chestsHeader}
            value={chests}
            valueClassName="font-mono"
          />
          <HeaderItem
            title={mimicsHeader}
            value={mimics}
            valueClassName="font-mono"
          />
          <HeaderItem
            title={goldHeader}
            value={gold}
            valueClassName="font-mono"
          />
          <HeaderItem
            title={gearHeader}
            value={gear}
            valueClassName="font-mono"
          />
          <HeaderItem
            title={itemsHeader}
            value={items}
            valueClassName="font-mono"
          />
        </dl>
        <EditGameSettingsButtonContainer className="m-4" />
      </div>
    </header>
  );
}

export { HeaderView };
