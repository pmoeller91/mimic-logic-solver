const ROW_DIRECTION = {
  top: 'TOP',
  bottom: 'BOTTOM',
} as const;

type RowDirection = (typeof ROW_DIRECTION)[keyof typeof ROW_DIRECTION];

export { ROW_DIRECTION };
export type { RowDirection };
