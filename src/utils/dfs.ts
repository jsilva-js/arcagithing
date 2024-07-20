import { Grid, Visisted } from "../types";

export function dfs(
  grid: Grid,
  x: number,
  y: number,
  visited: Visisted,
  isPartOfIsland: Function,
  originX: number, // Add originX parameter
  originY: number // Add originY parameter
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
    island.push([cx, cy, originX + cx, originY + cy]); // Include the root grid coordinates
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
        if (isPartOfIsland(grid, cx, cy, nx, ny)) {
          stack.push([nx, ny]);
        }
      }
    });
  }
  return island;
}
