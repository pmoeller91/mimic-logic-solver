import { useAtomValue } from "jotai";
import {
  ValidatedFormFieldContainer,
  ValidatedFormFieldContainerProps,
} from "../validated-form-field/ValidatedFormFieldContainer";
import { GAME_MODE } from "@/types/gameMode";
import { useTranslation } from "react-i18next";
import { gameModeAtom } from "@/atoms/gameModeAtom";

interface GameInfoFieldProps<T> extends ValidatedFormFieldContainerProps<T> {
  placeholder: string;
}

function GameInfoField<T>({
  className,
  formValueAtom,
  label,
  inputAttributes,
  placeholder,
  ...rest
}: GameInfoFieldProps<T>) {
  const gameMode = useAtomValue(gameModeAtom);
  const { t } = useTranslation();
  const unknownPlaceholder = t("editGameInfo.optionalPlaceholder");
  const extraInputAttributes =
    gameMode === GAME_MODE.random ? { disabled: true, value: unknownPlaceholder } : {};
  return (
    <ValidatedFormFieldContainer
      className={className}
      formValueAtom={formValueAtom}
      label={label}
      inputAttributes={{
        "data-vaul-no-drag": true,
        inputMode: "numeric",
        maxLength: 4,
        placeholder,
        ...extraInputAttributes,
      }}
      {...rest}
    />
  );
}

export { GameInfoField };
