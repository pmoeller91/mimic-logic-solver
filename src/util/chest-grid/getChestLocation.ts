import { Chest } from '@/types/chest';
import { ChestGrid } from '@/types/chestGrid';
import { ChestLocation } from '@/types/chestLocation';

interface GetChestLocationParams {
  grid: ChestGrid;
  chest: Chest;
}

function getChestLocation({
  grid,
  chest,
}: GetChestLocationParams): ChestLocation | null {
  let location: ChestLocation | null = null;
  grid.rows.findIndex((row, rowIndex) => {
    const colIndex = row.findIndex((col) => col === chest);
    if (colIndex >= 0) {
      location = [rowIndex, colIndex];
      return true;
    }
    return false;
  });
  return location;
}

export { getChestLocation };
