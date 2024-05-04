import { SimpleWritableAtom } from "@/types/simpleWritableAtom";
import { useAtom } from "jotai";
import { FormField } from "../../../form-field/FormField";
import { FormSelect } from "../../../form-field/FormSelect";
import { useCallback } from "use-memo-one";
import { DefinedAttribute } from "@/types/definedAttribute";
import { useTranslation } from "react-i18next";
import { CHEST_DIRECTION, ChestDirection } from "@/types/chestHint";

interface DirectionFieldProps {
  directionAtom: SimpleWritableAtom<ChestDirection>;
  // Help distinguish between duplicate params (ex two "Direction" params for
  // one hint)
  position?: number;
}

function DirectionField({ directionAtom, position }: DirectionFieldProps) {
  const { t } = useTranslation();
  const [selectedDirection, setSelectedDirection] = useAtom(directionAtom);
  const handleOnChange = useCallback<DefinedAttribute<"select", "onChange">>(
    (e) => {
      setSelectedDirection(e.target.value as ChestDirection);
    },
    [setSelectedDirection],
  );
  let label: string;
  if (position) {
    label = t("editChestInfo.chestHintSection.param.direction.label", {
      count: position,
      ordinal: true,
    });
  } else {
    label = t("editChestInfo.chestHintSection.param.direction.label");
  }
  return (
    <FormField label={label}>
      <FormSelect value={selectedDirection} onChange={handleOnChange}>
        {Object.values(CHEST_DIRECTION).map((chestDirection) => (
          <option key={chestDirection} value={chestDirection}>
            {t(`editChestInfo.chestHintSection.param.direction.directions.${chestDirection}`)}
          </option>
        ))}
      </FormSelect>
    </FormField>
  );
}

export { DirectionField };
