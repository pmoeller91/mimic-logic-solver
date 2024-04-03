import { Chest } from '@/types/chest';
import { ChestGrid } from '@/types/chestGrid';
import { ChestLocation } from '@/types/chestLocation';

interface GetChestByLocationParams {
  grid: ChestGrid;
  location: ChestLocation;
}

function getChestByLocation({
  grid,
  location,
}: GetChestByLocationParams): Chest | null {
  const [x, y] = location;
  return grid.rows[y]?.[x] ?? null;
}

export { getChestByLocation };
