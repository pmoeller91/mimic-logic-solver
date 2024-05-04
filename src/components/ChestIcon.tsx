import { CHEST_COLOR, ChestColor } from "@/types/chestColor";
import chestRed from "@/assets/chest-red.svg";
import chestBlack from "@/assets/chest-black.svg";
import chestBlue from "@/assets/chest-blue.svg";
import { ComponentPropsWithRef } from "react";
import clsx from "clsx";

interface ChestIconProps extends ComponentPropsWithRef<"img"> {
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
    <img
      src={chestImage[chestColor]}
      className={clsx("pointer-events-none", className)}
      {...rest}
    />
  );
}

export { ChestIcon };
