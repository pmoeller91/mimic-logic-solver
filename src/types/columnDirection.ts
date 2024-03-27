const COLUMN_DIRECTION = {
  leftmost: 'LEFTMOST',
  rightmost: 'RIGHTMOST',
} as const;

type ColumnDirection = (typeof COLUMN_DIRECTION)[keyof typeof COLUMN_DIRECTION];

export { COLUMN_DIRECTION };
export type { ColumnDirection };
