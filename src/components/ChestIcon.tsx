import { CHEST_COLOR, ChestColor } from '@/types/chestProperties';
import chestRed from '@/assets/chest-red.svg';
import chestBlack from '@/assets/chest-black.svg';
import chestBlue from '@/assets/chest-blue.svg';

interface ChestIconProps {
  chestColor: ChestColor;
  className?: string;
  altText?: string;
}

const chestImage: Record<ChestColor, string> = {
  [CHEST_COLOR.red]: chestRed,
  [CHEST_COLOR.blue]: chestBlue,
  [CHEST_COLOR.black]: chestBlack,
};

function ChestIcon({ chestColor, className, altText }: ChestIconProps) {
  return (
    <img src={chestImage[chestColor]} className={className} alt={altText} />
  );
}

export { ChestIcon };
