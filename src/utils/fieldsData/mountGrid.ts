import { AreaData, Grid } from "../../types";

export const mountGrid = (area: AreaData): Grid => {
  if (area.length === 0) {
    return []; // Return an empty grid if no data
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

  // Populate the grid based on adjusted coordinates
  area.forEach(([x, y, color]) => {
    grid[x - minX][y - minY] = color;
  });

  return grid;
};
