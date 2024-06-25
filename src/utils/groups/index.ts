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
      selectors: ["notFloor", "perpendicular"],
      excludeUnits: true,
      floor: false,
    } as IslandSelectorConfig,
  ],
};

export const getGridObjects: GetGridObjects = (grid, config) => {
  if (!config?.length) {
    // Handle empty or undefined config appropriately
    return [];
  }
  const results = config.map((cfg) =>
    findIslands(
      grid,
      configIslandSelector(cfg.selectors),
      cfg.excludeUnits,
      cfg.floor
    )
  );

  // Depending on how you want to handle multiple results, you might need to merge or select them
  return results.flat(); // Example: Flatten results if each `findIslands` returns an array
};
