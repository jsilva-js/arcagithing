import { GetGridObjects, IslandsTypes } from "../../types";
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
        ["diagonal", "or", "horizontal", "or", "vertical"],
        "and",
        ["notFloor"],
      ],
      excludeUnits: false,
      floor: false,
    },
  ],
  floor: [
    {
      selectors: ["floor"],
      excludeUnits: false,
      floor: true,
    },
  ],
  private_body: [
    {
      selectors: [
        ["horizontal", "or", "vertical"],
        "and",
        ["notFloor"],
        "and",
        ["privat"],
      ],
      excludeUnits: false,
      floor: false,
    },
  ],
  public_body: [
    {
      selectors: [["horizontal", "or", "vertical"], "and", ["notFloor"]],
      excludeUnits: false,
      floor: false,
    },
  ],
  private_group: [
    {
      selectors: [
        ["horizontal", "or", "vertical", "or", "diagonal"],
        "and",
        "privat",
        "and",
        ["notFloor"],
      ],
      excludeUnits: false,
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
