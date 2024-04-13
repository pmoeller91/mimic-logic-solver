import { ChestGridSized, ValidGridSizes } from '@/types/chestGrid';

interface SubGridProps<T extends ValidGridSizes> {
  grid: ChestGridSized<T>;
}

export type { SubGridProps };
