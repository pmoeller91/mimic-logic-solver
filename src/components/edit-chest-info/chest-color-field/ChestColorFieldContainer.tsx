import { ComponentProps, forwardRef } from "react";
import { ChestColorFieldView } from "./ChestColorFieldView";
import { useAtom, useAtomValue } from "jotai";
import { CHEST_COLOR } from "@/types/chestColor";
import { DefinedAttribute } from "@/types/definedAttribute";
import { useCallback, useMemo } from "use-memo-one";
import { isChestColor } from "@/util/isChestColor";
import { useStableId } from "@/hooks/useStableId";
import { useTranslation } from "react-i18next";
import { selectedChestAtomAtom } from "@/atoms/selectedChestAtomAtom";
import { focusAtom } from "jotai-optics";

interface ChestColorFieldContainerProps {
  className?: string;
}

type OnChangeHandler = DefinedAttribute<"input", "onChange">;
type Options = ComponentProps<typeof ChestColorFieldView>["options"];

const ChestColorFieldContainer = forwardRef<HTMLFieldSetElement, ChestColorFieldContainerProps>(
  function ChestColorFieldContainer({ className }, ref) {
    const { t } = useTranslation();
    const selectedChestAtom = useAtomValue(selectedChestAtomAtom);
    const chestColorAtom = useMemo(
      () => focusAtom(selectedChestAtom, (optic) => optic.prop("color")),
      [selectedChestAtom],
    );
    const label = t("editChestInfo.chestPropertiesSection.chestColor.label");
    const [chestColor, setChestColor] = useAtom(chestColorAtom);
    const handleOnChange: OnChangeHandler = useCallback<OnChangeHandler>(
      (e) => {
        if (isChestColor(e.target.value)) {
          setChestColor(e.target.value);
        }
      },
      [setChestColor],
    );
    const idSuffix = useStableId();
    const options: Options = useMemo<Options>(
      () =>
        Object.values(CHEST_COLOR).map((chestColor) => ({
          value: chestColor,
          label: t(`editChestInfo.chestPropertiesSection.chestColor.colors.${chestColor}`),
        })),
      [t],
    );
    return (
      <ChestColorFieldView
        className={className}
        ref={ref}
        onChange={handleOnChange}
        idSuffix={idSuffix}
        label={label}
        options={options}
        value={chestColor}
      />
    );
  },
);

export { ChestColorFieldContainer };
