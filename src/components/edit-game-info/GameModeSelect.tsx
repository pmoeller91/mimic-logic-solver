import { ComponentPropsWithRef, forwardRef } from "react";
import { FormField } from "../form-field/FormField";
import { FormSelect } from "../form-field/FormSelect";
import { useTranslation } from "react-i18next";
import { gameModeAtom } from "@/atoms/gameModeAtom";
import { useCallback } from "use-memo-one";
import { DefinedAttribute } from "@/types/definedAttribute";
import { isGameMode } from "@/util/isGameMode";
import { useAtom } from "jotai";
import { GAME_MODE, GameMode } from "@/types/gameMode";
import { getGameTranslation } from "@/util/getGameTranslation";
import { TRANSLATION_TYPE } from "@/types/translation";

const gameModeOptions: GameMode[] = [
  GAME_MODE.standard,
  GAME_MODE.random,
  GAME_MODE.robbers,
  GAME_MODE.doubt,
  GAME_MODE.confuse,
];

interface GameModeSelectProps extends ComponentPropsWithRef<"div"> {
  className?: string;
}

type SelectCallback = DefinedAttribute<"select", "onChange">;

const GameModeSelect = forwardRef<HTMLDivElement, GameModeSelectProps>(function GameModeSelect(
  { className, ...rest },
  ref,
) {
  const { t } = useTranslation();
  const gameModeLabel = t("editGameInfo.gameModeLabel");
  const [gameMode, setGameMode] = useAtom(gameModeAtom);
  const handleOnChange = useCallback<SelectCallback>(
    (e) => {
      if (isGameMode(e.target.value)) {
        setGameMode(e.target.value);
      }
    },
    [setGameMode],
  );
  return (
    <FormField label={gameModeLabel} className={className} {...rest} ref={ref}>
      <FormSelect value={gameMode} onChange={handleOnChange}>
        {gameModeOptions.map((gameMode) => (
          <option value={gameMode} key={gameMode}>
            {getGameTranslation({
              type: TRANSLATION_TYPE.gameMode,
              key: gameMode,
              t,
            })}
          </option>
        ))}
      </FormSelect>
    </FormField>
  );
});

export { GameModeSelect };
