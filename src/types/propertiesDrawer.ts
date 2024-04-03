const PROPERTIES_DRAWER_MODE = {
  gameInfo: 'GAME_INFO',
  chest: 'CHEST',
} as const;

type PropertiesDrawerMode =
  (typeof PROPERTIES_DRAWER_MODE)[keyof typeof PROPERTIES_DRAWER_MODE];

export { PROPERTIES_DRAWER_MODE };
export type { PropertiesDrawerMode };
