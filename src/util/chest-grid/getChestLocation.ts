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
  grid.rows.findIndex((row, y) => {
    const x = row.findIndex((col) => col === chest);
    if (x >= 0) {
      location = [x, y];
      return true;
    }
    return false;
  });
  return location;
}

export { getChestLocation };
