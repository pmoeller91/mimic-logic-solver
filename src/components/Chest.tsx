import { CHEST_COLOR, ChestColor } from '@/types/chest';
import chestRed from '@/assets/chest-red.svg';
import chestBlack from '@/assets/chest-black.svg';
import chestBlue from '@/assets/chest-blue.svg';

interface ChestProps {
  color: ChestColor;
  className?: string;
}

const chestImage: Record<ChestColor, string> = {
  [CHEST_COLOR.red]: chestRed,
  [CHEST_COLOR.blue]: chestBlue,
  [CHEST_COLOR.black]: chestBlack,
};

function Chest({ color, className }: ChestProps) {
  return <img src={chestImage[color]} className={className} />;
}

export { Chest };
