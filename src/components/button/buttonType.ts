const BUTTON_TYPE = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
  close: 'CLOSE',
} as const;

type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export { BUTTON_TYPE };
export type { ButtonType };
