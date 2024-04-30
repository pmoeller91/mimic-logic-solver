const RADIO_TILE_SIZE = {
  large: "LARGE",
  medium: "MEDIUM",
} as const;

type RadioTileSize = (typeof RADIO_TILE_SIZE)[keyof typeof RADIO_TILE_SIZE];

export { RADIO_TILE_SIZE };
export type { RadioTileSize };
