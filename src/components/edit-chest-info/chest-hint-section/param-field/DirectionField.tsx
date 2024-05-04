import { SimpleWritableAtom } from "@/types/simpleWritableAtom";
import { useAtom } from "jotai";
import { FormField } from "../../../form-field/FormField";
import { FormSelect } from "../../../form-field/FormSelect";
import { useCallback, useMemo } from "use-memo-one";
import { DefinedAttribute } from "@/types/definedAttribute";
import { useTranslation } from "react-i18next";
import { ChestDirection } from "@/types/chestHint";
import { directionOptions } from "./directionOptions";

interface DirectionFieldProps {
  directionAtom: SimpleWritableAtom<ChestDirection>;
  // Help distinguish between duplicate params (ex two "Direction" params for
  // one hint)
  position?: number;
  allowedDirections: ChestDirection[];
}

function DirectionField({ directionAtom, position, allowedDirections }: DirectionFieldProps) {
  const { t } = useTranslation();
  const [selectedDirection, setSelectedDirection] = useAtom(directionAtom);
  const handleOnChange = useCallback<DefinedAttribute<"select", "onChange">>(
    (e) => {
      setSelectedDirection(e.target.value as ChestDirection);
    },
    [setSelectedDirection],
  );

  const filteredDirectionOptions = useMemo(
    () =>
      directionOptions.filter(
        (direction) => selectedDirection === direction || allowedDirections.includes(direction),
      ),
    [allowedDirections, selectedDirection],
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
        {filteredDirectionOptions.map((chestDirection) => (
          <option key={chestDirection} value={chestDirection}>
            {t(`editChestInfo.chestHintSection.param.direction.directions.${chestDirection}`)}
          </option>
        ))}
      </FormSelect>
    </FormField>
  );
}

export { DirectionField };
