import { SimpleWritableAtom } from "@/types/simpleWritableAtom";
import { useAtom } from "jotai";
import { FormField } from "../../../form-field/FormField";
import { FormSelect } from "../../../form-field/FormSelect";
import { useCallback, useMemo } from "use-memo-one";
import { DefinedAttribute } from "@/types/definedAttribute";
import { useTranslation } from "react-i18next";
import { ChestRank } from "@/types/chestHint";
import { rankOptions } from "./rankOptions";

interface RankFieldProps {
  rankAtom: SimpleWritableAtom<ChestRank>;
  // Help distinguish between duplicate params (ex two "Direction" params for
  // one hint)
  position?: number;
  allowedRanks: ChestRank[];
}

function RankField({ rankAtom, position, allowedRanks }: RankFieldProps) {
  const { t } = useTranslation();
  const [selectedRank, setSelectedRank] = useAtom(rankAtom);
  const filteredRankOptions = useMemo(
    () => rankOptions.filter((rank) => selectedRank === rank || allowedRanks.includes(rank)),
    [allowedRanks, selectedRank],
  );
  const handleOnChange = useCallback<DefinedAttribute<"select", "onChange">>(
    (e) => {
      setSelectedRank(e.target.value as ChestRank);
    },
    [setSelectedRank],
  );
  let label: string;
  if (position) {
    label = t("editChestInfo.chestHintSection.param.rank.label", {
      count: position,
      ordinal: true,
    });
  } else {
    label = t("editChestInfo.chestHintSection.param.rank.label");
  }
  return (
    <FormField label={label}>
      <FormSelect value={selectedRank} onChange={handleOnChange}>
        {filteredRankOptions.map((chestRank) => (
          <option key={chestRank} value={chestRank}>
            {t(`editChestInfo.chestHintSection.param.rank.ranks.${chestRank}`)}
          </option>
        ))}
      </FormSelect>
    </FormField>
  );
}

export { RankField };
