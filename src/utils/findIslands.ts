import { FieldsData, FindIsland, GroupFunction, Step } from "../types";
import { dfs } from "./dfs";

export const findIslands: FindIsland = (
  grid,
  isPartOfIsland,
  strict = false,
  zero = false
) => {
  const visited = grid.map((row) => row.map(() => false));
  const islands = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (!visited[x][y] && zero ? grid[x][y] === 0 : grid[x][y] !== 0) {
        const island = dfs(grid, x, y, visited, isPartOfIsland);
        if (island.length > (strict ? 1 : 0)) {
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

const extendedPublicGroups: GroupFunction = (grid, x1, y1, x2, y2) => {
  // public: [groups] + [semigroups] + [units]
  // const zones = publicZones(grid, x1, y1, x2, y2);
  return (
    (x1 === x2 && Math.abs(y1 - y2) === 1) || // Check for horizontal adjacency
    (y1 === y2 && Math.abs(x1 - x2) === 1) // Check for vertical adjacency
  );
};

const publicZones: GroupFunction = (grid, x1, y1, x2, y2) => {
  return grid[x1][y1] !== 0 && grid[x2][y2] !== 0;
};
const extendedPrivateGroups: GroupFunction = (grid, x1, y1, x2, y2) => {
  return grid[x1][y1] === grid[x2][y2] && grid[x1][y1] !== 0;
};

const publicGroups: GroupFunction = (grid, x1, y1, x2, y2) => {
  return (
    grid[x1][y1] !== grid[x2][y2] && grid[x1][y1] !== 0 && grid[x2][y2] !== 0
  );
};

const privateGroups: GroupFunction = (grid, x1, y1, x2, y2) => {
  return grid[x1][y1] === grid[x2][y2] && grid[x1][y1] !== 0;
};

const holes: GroupFunction = (grid, x1, y1, x2, y2) => {
  return grid[x1][y1] === grid[x2][y2] && grid[x1][y1] === 0;
};

const extendedHoles: GroupFunction = (grid, x1, y1, x2, y2) => {
  return grid[x1][y1] === 0 && grid[x2][y2] === 0;
};

export const check = ({ grid, x1, y1, x2, y2 }: Step) => ({
  diagonal: Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 1,
  floor: {
    hole: grid[x1][y1] === 0 && grid[x2][y2] === 0,
    notHole: grid[x1][y1] !== 0 && grid[x2][y2] !== 0,
  },
  same: grid[x1][y1] === grid[x2][y2],
  perpendicular:
    (x1 === x2 && Math.abs(y1 - y2) === 1) ||
    (y1 === y2 && Math.abs(x1 - x2) === 1),
});

export const groupsSelectors = {
  public: {
    // [limbs] and [body]
    extended: extendedPublicGroups,
    // [body]
    normal: publicGroups,
  },
  private: {
    // [limbs] and [body]
    extended: extendedPrivateGroups,
    // [body]
    normal: privateGroups,
  },
  floor: {
    extended: extendedHoles,
    normal: holes,
  },
};
