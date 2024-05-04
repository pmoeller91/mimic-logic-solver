import { useAtom } from "jotai";
import { ChestLayoutSelectorView } from "./ChestLayoutSelectorView";
import { numChestsAtom } from "@/atoms/numChestsAtom";
import { useCallback } from "use-memo-one";
import { ValidGridSizes } from "@/types/chestGrid";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

interface ChestLayoutSelectorContainerProps {
  className?: string;
}

const ChestLayoutSelectorContainer = forwardRef<
  HTMLFieldSetElement,
  ChestLayoutSelectorContainerProps
>(function ChestLayoutSelectorContainer({ className }, ref) {
  const { t } = useTranslation();
  const title = t("chestLayoutSelector.title");
  const [numChests, setNumChests] = useAtom(numChestsAtom);
  const handleOnChange: Required<JSX.IntrinsicElements["input"]>["onChange"] = useCallback(
    (e) => {
      const parsedValue = Number.parseInt(e.target.value, 10);
      if ([4, 6, 7, 9].includes(parsedValue)) {
        setNumChests(parsedValue as ValidGridSizes);
      }
    },
    [setNumChests],
  );
  return (
    <ChestLayoutSelectorView
      title={title}
      onChange={handleOnChange}
      selectedLayout={numChests}
      className={className}
      ref={ref}
    />
  );
});

export { ChestLayoutSelectorContainer };
