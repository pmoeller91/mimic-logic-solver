import { ChestColor } from '@/types/chestProperties';
import { ChestIcon } from '../ChestIcon';

interface MiniChestIconProps {
  color: ChestColor;
  className?: string;
}

function MiniChestIcon({ color, className }: MiniChestIconProps) {
  return <ChestIcon color={color} className={className} />;
}

export { MiniChestIcon };
