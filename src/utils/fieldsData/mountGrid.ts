import { AreaData, Grid, GridIdx } from "../../types";

export const mountGrid = (area: AreaData): { grid: Grid; gridIdx: GridIdx } => {
  if (area.length === 0) {
    return { grid: [], gridIdx: [] }; // Return an empty grid if no data
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  // Calculate the minimum and maximum x and y to determine grid dimensions
  area.forEach(([x, y]) => {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  });

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;

  // Initialize the grid with zeros or a default value indicating empty
  const grid = Array.from({ length: width }, () => Array(height).fill(0));
  const gridIdx = Array.from({ length: width }, () =>
    Array(height).fill([0, 0])
  );

  // Populate the grid based on adjusted coordinates
  area.forEach(([x, y, color, gx, gy]) => {
    grid[x - minX][y - minY] = color;
    gridIdx[x - minX][y - minY] = [gx, gy];
  });

  return { grid, gridIdx };
};
