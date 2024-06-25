import {
  ConfigIslandSelector,
  FieldsData,
  GetGridObjects,
  IslandSelectorConfig,
  IslandsTypes,
} from "../../types";
import { findIslands, configIslandSelector } from "../findIslands";

// grid = floor + public
// floor = [hole]
// public = [group] + [semigroup] + [unit]
// group = [body + limb]
// semigroup = [body] + [limb]
// body = [public_body] >= [private_body]
// limb = [public_limb] >= [private_limb]
// public_body = group of contiguous perpendicular
//               neighbors of all colors (except 0)
// public_limb = group of contiguous diagonal
//               neighbors of all colors (except 0)
// private_body = group of contiguous perpendicular
//               neighbors of same color (except 0)
// private_limb = group of contiguous diagonal
//               neighbors of same color (except 0)

export const groups: IslandsTypes = {
  public: [
    {
      selectors: [
        ["diagonal", "or", "vertical", "or", "horizontal"],
        "and",
        ["notFloor"],
      ],
      excludeUnits: true,
      floor: false,
    },
  ],
};

export const getGridObjects: GetGridObjects = (grid, config) => {
  if (!config?.length) {
    return [];
  }

  return config
    .map((cfg) =>
      findIslands(
        grid,
        configIslandSelector(cfg.selectors),
        cfg.excludeUnits,
        cfg.floor
      )
    )
    .flat();
};

// export type ConfigIslandSelector = (
//   grid: Grid,
//   config?: IslandSelectorConfig[]  // Making the config parameter optional
// ) => FieldsData[];

// export const getGridObjects: ConfigIslandSelector = (grid, config = []) => {
//   // Handle the case where config might be undefined internally
//   // For example, returning early or defaulting to some behavior
//   if (!config.length) {
//     // Handle empty or undefined config appropriately
//     return [];
//   }

//   // Normal processing
//   return config.map(cfg =>
//     findIslands(grid, cfg.selectors, cfg.excludeUnits, cfg.floor)
//   ).flat();
// };
