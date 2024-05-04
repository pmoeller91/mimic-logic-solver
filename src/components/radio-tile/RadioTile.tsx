import clsx from "clsx";
import { DefinedAttribute } from "@/types/definedAttribute";
import React, { ComponentProps } from "react";
import { RADIO_TILE_SIZE, RadioTileSize } from "./radioTileSize";

interface RadioTileProps {
  value: ComponentProps<"input">["value"];
  checked?: boolean;
  onChange: DefinedAttribute<"input", "onChange">;
  className?: string;
  children: React.ReactNode;
  inputId?: string;
  size: RadioTileSize;
}

function RadioTile({
  value,
  checked,
  onChange,
  children,
  className,
  inputId,
  size,
}: RadioTileProps) {
  const isLarge = size === RADIO_TILE_SIZE.large;
  const isMedium = size === RADIO_TILE_SIZE.medium;
  const containerSizeClasses = clsx(isLarge && "h-32 w-32", isMedium && "h-16 w-16");
  const tileSizeClasses = clsx(
    (isLarge || isMedium) && "gap-2 p-2 border-2 rounded-md group-has-[:focus]:border-4",
  );
  return (
    <div className={clsx("relative m-2 group", containerSizeClasses, className)}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="opacity-0 absolute top-0 left-0 h-full w-full m-0 cursor-pointer"
        value={value}
        id={inputId}
        data-vaul-no-drag
      />
      <div
        className={clsx(
          "h-full w-full flex flex-col items-center justify-evenly border-c",
          "transition-transform group-has-[:checked]:bg-c",
          "group-has-[:checked]:scale-105 group-has-[:focus]:border-cll",
          tileSizeClasses,
        )}
        data-vaul-no-drag
      >
        {children}
      </div>
    </div>
  );
}

export { RadioTile };
