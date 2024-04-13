import { CHEST_COLOR, ChestColor } from '@/types/chestProperties';
import chestRed from '@/assets/chest-red.svg';
import chestBlack from '@/assets/chest-black.svg';
import chestBlue from '@/assets/chest-blue.svg';
import { ComponentPropsWithRef } from 'react';

interface ChestIconProps extends ComponentPropsWithRef<'img'> {
  chestColor: ChestColor;
  className?: string;
}

const chestImage: Record<ChestColor, string> = {
  [CHEST_COLOR.red]: chestRed,
  [CHEST_COLOR.blue]: chestBlue,
  [CHEST_COLOR.black]: chestBlack,
};

function ChestIcon({ chestColor, className, ...rest }: ChestIconProps) {
  return (
    <img src={chestImage[chestColor]} className={className} {...rest} />
  );
}

export { ChestIcon };
