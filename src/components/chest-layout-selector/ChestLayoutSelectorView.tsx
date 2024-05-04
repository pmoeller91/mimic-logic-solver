import { ValidGridSizes } from "@/types/chestGrid";
import { ChestLayoutSelectorRadio } from "./ChestLayoutSelectorRadio";
import { ComponentProps, forwardRef } from "react";
import clsx from "clsx";

interface ChestLayoutSelectorViewProps {
  onChange: ComponentProps<typeof ChestLayoutSelectorRadio>["onChange"];
  selectedLayout: ValidGridSizes;
  title: string;
  className?: string;
}

const ChestLayoutSelectorView = forwardRef<HTMLFieldSetElement, ChestLayoutSelectorViewProps>(
  function ChestLayoutSelectorView({ onChange, selectedLayout, title, className }, ref) {
    return (
      <fieldset className={clsx("mb-4", className)} ref={ref}>
        <legend className="text-lg">{title}</legend>
        <div className="gap-2 grid lg:grid-cols-2 sm:grid-cols-4 grid-cols-2 justify-items-center">
          <ChestLayoutSelectorRadio
            numChests={4}
            onChange={onChange}
            checked={selectedLayout === 4}
          />
          <ChestLayoutSelectorRadio
            numChests={6}
            onChange={onChange}
            checked={selectedLayout === 6}
          />
          <ChestLayoutSelectorRadio
            numChests={7}
            onChange={onChange}
            checked={selectedLayout === 7}
          />
          <ChestLayoutSelectorRadio
            numChests={9}
            onChange={onChange}
            checked={selectedLayout === 9}
          />
        </div>
      </fieldset>
    );
  },
);

export { ChestLayoutSelectorView };
