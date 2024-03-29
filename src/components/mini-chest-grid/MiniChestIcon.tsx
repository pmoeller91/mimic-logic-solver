import { ChestColor } from '@/types/chestProperties';
import { ChestIcon } from '../ChestIcon';

interface MiniChestIconProps {
  color: ChestColor;
}

function MiniChestIcon({ color }: MiniChestIconProps) {
  return <ChestIcon color={color} className="w-4 h-4" />;
}

export { MiniChestIcon };
