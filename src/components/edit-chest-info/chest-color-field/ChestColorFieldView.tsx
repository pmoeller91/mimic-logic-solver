import { ChestColor } from "@/types/chestColor";
import { DefinedAttribute } from "@/types/definedAttribute";
import { forwardRef } from "react";
import clsx from "clsx";
import { RadioTile } from "../../radio-tile/RadioTile";
import { RADIO_TILE_SIZE } from "../../radio-tile/radioTileSize";
import { ChestIcon } from "../../ChestIcon";

interface Option {
  value: ChestColor;
  label: string;
}

interface ChestColorFieldViewProps {
  className?: string;
  label: string;
  onChange: DefinedAttribute<"input", "onChange">;
  value: ChestColor;
  options: Option[];
  idSuffix: string;
}

const ChestColorFieldView = forwardRef<HTMLFieldSetElement, ChestColorFieldViewProps>(
  function ChestColorFieldView({ className, label, idSuffix, options, value, onChange }, ref) {
    return (
      <fieldset className={clsx("", className)} ref={ref}>
        <legend>{label}</legend>
        <div className="flex flex-row gap-2 items-center justify-center">
          {options.map(({ value: optValue, label: optLabel }) => (
            <RadioTile
              key={optValue}
              onChange={onChange}
              size={RADIO_TILE_SIZE.medium}
              value={optValue}
              checked={value === optValue}
              inputId={`chest-color-field-opt-${optValue}-${idSuffix}`}
            >
              <ChestIcon chestColor={optValue} aria-hidden="true" />
              <label htmlFor={`chest-color-field-opt-${optValue}-${idSuffix}`} className="sr-only">
                {optLabel}
              </label>
            </RadioTile>
          ))}
        </div>
      </fieldset>
    );
  },
);

export { ChestColorFieldView };
