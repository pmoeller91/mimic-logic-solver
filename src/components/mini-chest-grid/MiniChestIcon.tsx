import { ChestColor } from '@/types/chestProperties';
import { ChestIcon } from '../ChestIcon';

interface MiniChestIconProps {
  chestColor: ChestColor;
  className?: string;
}

function MiniChestIcon({ chestColor, className }: MiniChestIconProps) {
  return <ChestIcon chestColor={chestColor} className={className} />;
}

export { MiniChestIcon };
