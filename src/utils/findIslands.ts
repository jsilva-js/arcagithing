import { FieldsData, FindIsland, GroupFunction, Step } from "../types";
import { dfs } from "./dfs";

export const findIslands: FindIsland = (
  grid,
  isPartOfIsland,
  units = false,
  floor = false
) => {
  const visited = grid.map((row) => row.map(() => false));
  const islands = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (!visited[x][y] && floor ? grid[x][y] === 0 : grid[x][y] !== 0) {
        const island = dfs(grid, x, y, visited, isPartOfIsland);
        if (island.length > (units ? 1 : 0)) {
          // [[x,y,color]...]
          islands.push(island.map(([ix, iy]) => [ix, iy, grid[ix][iy]]));
        }
      }
    }
  }

  return islands as FieldsData;
};

// extended: with diagonals included
// public: different colors
// private: same color
// holes: 0s

type Selectors =
  | "notFloor"
  | "privat"
  | "diagonal"
  | "horizontal"
  | "vertical"
  | "perpendicular";

// Function to set group criteria based on selectors
export const configIslandSelector: (selectors: Selectors[]) => GroupFunction = (
  selectors
) => {
  return (grid, x1, y1, x2, y2) => {
    const conditions = {
      notFloor: grid[x1][y1] !== 0 && grid[x2][y2] !== 0,
      privat: grid[x1][y1] === grid[x2][y2],
      diagonal: Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 1,
      horizontal: x1 === x2 && Math.abs(y1 - y2) === 1,
      vertical: y1 === y2 && Math.abs(x1 - x2) === 1,
      perpendicular:
        (x1 === x2 && Math.abs(y1 - y2) === 1) ||
        (y1 === y2 && Math.abs(x1 - x2) === 1),
    };

    return selectors.every((selector) => {
      return conditions[selector];
    });
  };
};
