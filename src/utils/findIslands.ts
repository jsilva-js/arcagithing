import {
  AllowedClassesObj,
  FieldsClassInput,
  FieldsClassification,
  FieldsData,
  FindIsland,
  GroupFunction,
} from "../types";
import { dfs } from "./dfs";

export const findIslands: FindIsland = (
  grid,
  allowedClasses,
  strict = false,
  zero = false
) => {
  const visited = grid.map((row) => row.map(() => false));
  const islands = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (!visited[x][y] && zero ? grid[x][y] === 0 : grid[x][y] !== 0) {
        const isPartOfIsland: GroupFunction = (grid, x1, y1, x2, y2) =>
          fieldsClassification(check({ grid, x1, y1, x2, y2 }), allowedClasses);
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
export const fieldsClassification: FieldsClassification = (checks, allowed) => {
  const { body, floor, limb, private: pr, public: pu } = allowed;
  const group = body && limb && !floor;
  const bod = body && !limb && !floor;
  const lim = limb && !body && !floor;
  const priv = pr && !floor;
  const pub = pu && !floor;

  const pubGroup = pub && group;
  const pubBody = pub && bod;
  const pubLimb = pub && lim;
  const privGroup = priv && group;
  const privBody = priv && bod;
  const privLimb = priv && lim;
  const floorGroup = floor && group;
  const floorBody = floor && bod;
  const floorLimb = floor && lim;

  if (pubGroup) return !checks.hole;
  if (pubBody) return !checks.hole && checks.perpendicular;
  if (pubLimb) return !checks.hole && checks.diagonal;
  if (privGroup) return !checks.hole && checks.same;
  if (privBody) return !checks.hole && checks.same && checks.perpendicular;
  if (privLimb) return !checks.hole && checks.same && checks.diagonal;
  if (floorGroup) return checks.hole;
  if (floorBody) return checks.hole && checks.perpendicular;
  if (floorLimb) return checks.hole && checks.diagonal;
  return false;
};

export const check = ({ grid, x1, y1, x2, y2 }: FieldsClassInput) => ({
  diagonal: Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 1,
  hole: grid[x1][y1] === 0 && grid[x2][y2] === 0,
  same: grid[x1][y1] === grid[x2][y2],
  perpendicular:
    (x1 === x2 && Math.abs(y1 - y2) === 1) ||
    (y1 === y2 && Math.abs(x1 - x2) === 1),
});
