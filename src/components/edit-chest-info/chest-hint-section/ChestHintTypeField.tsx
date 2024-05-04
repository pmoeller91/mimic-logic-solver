import React, { forwardRef } from "react";
import { FormField } from "../../form-field/FormField";
import { CHEST_HINT_TYPE, ChestHintType } from "@/types/chestHint";
import { useTranslation } from "react-i18next";
import { focusAtom } from "jotai-optics";
import { useCallback, useMemo } from "use-memo-one";
import { useAtom, useAtomValue } from "jotai";
import { getGameTranslation } from "@/util/getGameTranslation";
import { TRANSLATION_TYPE } from "@/types/translation";
import { getDefaultHint } from "@/util/getDefaultHint";
import { FormSelect } from "../../form-field/FormSelect";
import { selectedChestAtomAtom } from "@/atoms/selectedChestAtomAtom";
import { GAME_MODE, GameMode } from "@/types/gameMode";
import { gameModeAtom } from "@/atoms/gameModeAtom";

interface ChestHintTypeFieldProps {
  className?: string;
}

type SelectCallback = Required<JSX.IntrinsicElements["select"]>["onChange"];

interface ChestHintGroup {
  label: string;
  id: string;
  options: ChestHintType[];
}

const getChestHintGroups: (gameMode: GameMode) => ChestHintGroup[] = (gameMode) => {
  if (gameMode === GAME_MODE.robbers) {
    return [
      {
        label: "editChestInfo.chestHintSection.type.group.self",
        id: "self",
        options: [CHEST_HINT_TYPE.selfAsleep, CHEST_HINT_TYPE.selfNotMimic],
      },
      {
        label: "editChestInfo.chestHintSection.type.group.direction",
        id: "direction",
        options: [
          CHEST_HINT_TYPE.directionMimic,
          CHEST_HINT_TYPE.directionNotMimic,
          CHEST_HINT_TYPE.directionRobber,
          CHEST_HINT_TYPE.directionNoRobber,
          CHEST_HINT_TYPE.directionGold,
          CHEST_HINT_TYPE.directionNotGold,
        ],
      },
      {
        label: "editChestInfo.chestHintSection.type.group.color",
        id: "color",
        options: [
          CHEST_HINT_TYPE.colorMimic,
          CHEST_HINT_TYPE.colorNoMimic,
          CHEST_HINT_TYPE.colorRobber,
          CHEST_HINT_TYPE.colorNoRobber,
          CHEST_HINT_TYPE.colorGold,
          CHEST_HINT_TYPE.colorNoGold,
          CHEST_HINT_TYPE.colorNumMimics,
          CHEST_HINT_TYPE.colorMoreMimics,
          CHEST_HINT_TYPE.colorSameMimics,
        ],
      },
      {
        label: "editChestInfo.chestHintSection.type.group.rank",
        id: "rank",
        options: [
          CHEST_HINT_TYPE.rankMimic,
          CHEST_HINT_TYPE.rankNoMimic,
          CHEST_HINT_TYPE.rankRobber,
          CHEST_HINT_TYPE.rankNoRobber,
          CHEST_HINT_TYPE.rankGold,
          CHEST_HINT_TYPE.rankNoGold,
          CHEST_HINT_TYPE.rankMoreMimics,
          CHEST_HINT_TYPE.rankSameMimics,
        ],
      },
      {
        label: "editChestInfo.chestHintSection.type.group.mimics",
        id: "mimics",
        options: [
          CHEST_HINT_TYPE.mimicsSameColor,
          CHEST_HINT_TYPE.mimicsNotSameColor,
          CHEST_HINT_TYPE.mimicsNeighbors,
          CHEST_HINT_TYPE.mimicsNotNeighbors,
          CHEST_HINT_TYPE.mimicsNumber,
          CHEST_HINT_TYPE.number,
        ],
      },
    ];
  }
  return [
    {
      label: "editChestInfo.chestHintSection.type.group.self",
      id: "self",
      options: [CHEST_HINT_TYPE.selfAsleep, CHEST_HINT_TYPE.selfNotMimic],
    },
    {
      label: "editChestInfo.chestHintSection.type.group.direction",
      id: "direction",
      options: [
        CHEST_HINT_TYPE.directionMimic,
        CHEST_HINT_TYPE.directionNotMimic,
        CHEST_HINT_TYPE.directionGold,
        CHEST_HINT_TYPE.directionNotGold,
      ],
    },
    {
      label: "editChestInfo.chestHintSection.type.group.color",
      id: "color",
      options: [
        CHEST_HINT_TYPE.colorMimic,
        CHEST_HINT_TYPE.colorNoMimic,
        CHEST_HINT_TYPE.colorGold,
        CHEST_HINT_TYPE.colorNoGold,
        CHEST_HINT_TYPE.colorNumMimics,
        CHEST_HINT_TYPE.colorMoreMimics,
        CHEST_HINT_TYPE.colorSameMimics,
      ],
    },
    {
      label: "editChestInfo.chestHintSection.type.group.rank",
      id: "rank",
      options: [
        CHEST_HINT_TYPE.rankMimic,
        CHEST_HINT_TYPE.rankNoMimic,
        CHEST_HINT_TYPE.rankGold,
        CHEST_HINT_TYPE.rankNoGold,
        CHEST_HINT_TYPE.rankMoreMimics,
        CHEST_HINT_TYPE.rankSameMimics,
      ],
    },
    {
      label: "editChestInfo.chestHintSection.type.group.mimics",
      id: "mimics",
      options: [
        CHEST_HINT_TYPE.mimicsSameColor,
        CHEST_HINT_TYPE.mimicsNotSameColor,
        CHEST_HINT_TYPE.mimicsNeighbors,
        CHEST_HINT_TYPE.mimicsNotNeighbors,
        CHEST_HINT_TYPE.mimicsNumber,
        CHEST_HINT_TYPE.number,
      ],
    },
  ];
};

const ChestHintTypeField = forwardRef<HTMLSelectElement, ChestHintTypeFieldProps>(
  function ChestHintField({ className }, ref) {
    const { t } = useTranslation();
    const selectedChestAtom = useAtomValue(selectedChestAtomAtom);
    const chestHintAtom = useMemo(
      () => focusAtom(selectedChestAtom, (optic) => optic.prop("hint")),
      [selectedChestAtom],
    );
    const [selectedChestHint, setSelectedChestHint] = useAtom(chestHintAtom);
    const handleOnChange = useCallback<SelectCallback>(
      (e) => {
        const newHintType = e.target.value as ChestHintType;
        setSelectedChestHint(getDefaultHint(newHintType));
      },
      [setSelectedChestHint],
    );

    const gameMode = useAtomValue(gameModeAtom);

    const label = t("editChestInfo.chestHintSection.type.label");

    const chestHintGroups = useMemo(() => getChestHintGroups(gameMode), [gameMode]);

    return (
      <FormField label={label} className={className}>
        <FormSelect onChange={handleOnChange} value={selectedChestHint.type} ref={ref}>
          {chestHintGroups.map(({ label, options, id }, idx, arr) => (
            <React.Fragment key={id}>
              <optgroup label={t(label)} key={id}>
                {options.map((hintType) => (
                  <option key={hintType} value={hintType}>
                    {getGameTranslation({
                      type: TRANSLATION_TYPE.chestHintBlank,
                      key: hintType,
                      t,
                    })}
                  </option>
                ))}
              </optgroup>
              {/* React does not like <hr /> in select currently, but the
            HTML spec has been updated to allow this. React itself has
            an update to not flag this with validateDomNesting in the
            future. */}
              {idx !== arr.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </FormSelect>
      </FormField>
    );
  },
);

export { ChestHintTypeField };
