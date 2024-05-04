import { derivedChestGridAtom } from "@/atoms/derivedChestGridAtom";
import { useAtomValue } from "jotai";
import { ChestGrid } from "../chest-grid/ChestGrid";

function MainChestGrid() {
  const chestGrid = useAtomValue(derivedChestGridAtom);
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <ChestGrid grid={chestGrid} />
    </div>
  );
}

export { MainChestGrid };
