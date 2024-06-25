import { Allowed, Grid, Step, Visisted } from "../types";
import { check, fieldsClassification } from "./findIslands";

const isPartOfIsland = (step: Step, allowedClasses: Allowed) =>
  fieldsClassification(check({ ...step }), allowedClasses);
export function dfs(
  grid: Grid,
  x: number,
  y: number,
  visited: Visisted,
  allowed: Allowed
) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1], // Non-diagonal directions
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1], // Diagonal directions
  ];
  const stack = [[x, y]];
  const island = [];
  while (stack.length > 0) {
    const [cx, cy] = stack.pop() as number[];
    if (visited[cx][cy]) continue;
    visited[cx][cy] = true;
    island.push([cx, cy]);
    directions.forEach(([dx, dy]) => {
      const nx = cx + dx,
        ny = cy + dy;
      if (
        nx >= 0 &&
        nx < grid.length &&
        ny >= 0 &&
        ny < grid[0].length &&
        !visited[nx][ny]
      ) {
        if (isPartOfIsland({ grid, x1: cx, y1: cy, x2: nx, y2: ny }, allowed)) {
          stack.push([nx, ny]);
        }
      }
    });
  }
  return island;
}
