export const AvailableRoads = {
  a: "a",
  b: "b",
} as const;

export type RoadKeys = keyof typeof AvailableRoads;

export type RoadValues = (typeof AvailableRoads)[RoadKeys];
