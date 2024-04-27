import { forwardRef } from "react";
import { FormField } from "../form-field/FormField";
import { FormSelect } from "../form-field/FormSelect";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "use-memo-one";
import { focusAtom } from "jotai-optics";
import { useAtom, useAtomValue } from "jotai";
import { CHEST_CONTENTS, ChestContents } from "@/types/chestContents";
import { getGameTranslation } from "@/util/getGameTranslation";
import { TRANSLATION_TYPE } from "@/types/translation";
import { selectedChestAtomAtom } from "@/atoms/selectedChestAtomAtom";
import { DefinedAttribute } from "@/types/definedAttribute";
import { GAME_MODE, GameMode } from "@/types/gameMode";
import { gameModeAtom } from "@/atoms/gameModeAtom";

const getValidChestContents = (gameMode: GameMode) => {
  const validChestContents: [ChestContents, boolean][] = [
    [CHEST_CONTENTS.unknown, true],
    [CHEST_CONTENTS.mimic, true],
    [CHEST_CONTENTS.robber, gameMode === GAME_MODE.robbers],
    [CHEST_CONTENTS.not_mimic, true],
    [CHEST_CONTENTS.gold, true],
    [CHEST_CONTENTS.gear, true],
    [CHEST_CONTENTS.item, true],
  ];
  return validChestContents.filter(([_content, isValid]) => isValid).map(([content]) => content);
};

interface ChestContentsFieldProps {
  className?: string;
}
type SelectCallback = DefinedAttribute<"select", "onChange">;

const ChestContentsField = forwardRef<HTMLSelectElement, ChestContentsFieldProps>(
  function ChestContentsField({ className }, ref) {
    const { t } = useTranslation();
    const gameMode = useAtomValue(gameModeAtom);
    const label = t("editChestInfo.chestPropertiesSection.chestContents.label");

    const selectedChestAtom = useAtomValue(selectedChestAtomAtom);
    const chestContentsAtom = useMemo(
      () => focusAtom(selectedChestAtom, (optic) => optic.prop("contents")),
      [selectedChestAtom],
    );

    const [chestContents, setChestContents] = useAtom(chestContentsAtom);

    const handleOnChange = useCallback<SelectCallback>(
      (e) => {
        const newContents = e.target.value as ChestContents;
        setChestContents(newContents);
      },
      [setChestContents],
    );

    const validChestContents = useMemo(() => getValidChestContents(gameMode), [gameMode]);

    return (
      <FormField label={label} className={className}>
        <FormSelect ref={ref} value={chestContents} onChange={handleOnChange}>
          {validChestContents.map((contents) => (
            <option key={contents} value={contents}>
              {getGameTranslation({
                type: TRANSLATION_TYPE.chestContentsSelect,
                key: contents,
                t,
              })}
            </option>
          ))}
        </FormSelect>
      </FormField>
    );
  },
);

export { ChestContentsField };
