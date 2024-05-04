import { TFunction } from "i18next";

interface GenContextLabelParams {
  totalChests: number;
  chestNum: number;
  row: number;
  col: number;
  t: TFunction;
}

const generateContextLabel = ({ totalChests, chestNum, row, col, t }: GenContextLabelParams) =>
  t("chestGrid.contextLabel", { totalChests, chestNum, row, col });

export { generateContextLabel };
