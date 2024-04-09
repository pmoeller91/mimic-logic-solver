import { ChestGridCallbacks } from '@/hooks/useChestGridCallbacks';
import { ChestGridSized, ValidGridSizes } from '@/types/chestGrid';

interface SubGridProps<T extends ValidGridSizes> {
  grid: ChestGridSized<T>;
  onClickEditCallbacks: ChestGridCallbacks;
}

export type { SubGridProps };
