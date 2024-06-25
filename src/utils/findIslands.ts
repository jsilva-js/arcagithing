import {
  Allowed,
  ChecksInput,
  Step,
  FieldsData,
  FindIsland,
  GroupFunction,
} from "../types";
import { dfs } from "./dfs";
import { config } from "./groups";

export const findIslands: FindIsland = (grid, allowedClasses) => {
  const visited = grid.map((row) => row.map(() => false));
  const islands = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (
        !visited[x][y] && allowedClasses.floor
          ? grid[x][y] === 0
          : grid[x][y] !== 0
      ) {
        const island = dfs(grid, x, y, visited, allowedClasses);
        if (island.length > 0) {
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

// Function to evaluate configurations against the current state
export const fieldsClassification = (
  checks: ChecksInput,
  allowed: Allowed
): boolean => {
  for (const { required, outcome } of config) {
    if (
      Object.keys(required).every(
        (key) =>
          required[key as keyof Allowed] === allowed[key as keyof Allowed]
      )
    ) {
      return outcome(checks);
    }
  }
  return false; // Default outcome if no condition matches
};

export const check = ({ grid, x1, y1, x2, y2 }: Step) => ({
  diagonal: Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 1,
  hole: grid[x1][y1] === 0 && grid[x2][y2] === 0,
  same: grid[x1][y1] === grid[x2][y2],
  perpendicular:
    (x1 === x2 && Math.abs(y1 - y2) === 1) ||
    (y1 === y2 && Math.abs(x1 - x2) === 1),
});
