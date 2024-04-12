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
  const [row, col] = location;
  return grid.rows[row]?.[col] ?? null;
}

export { getChestByLocation };
