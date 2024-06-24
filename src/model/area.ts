import { AreaData, Grid } from "../types";

export class AreaGeometry {
  width: number;
  height: number;
  population: number;
  grid: Grid;

  constructor(area: AreaData) {
    this.width = 0;
    this.height = 0;
    this.population = area.length; // Population is simply the count of units
    this.grid = this.mountArea(area);
    if (this.grid.length === 0) {
      return;
    }
    this.width = this.grid[0].length;
    this.height = this.grid.length;
  }

  mountArea(area: AreaData) {
    if (area.length === 0) {
      return []; // Return an empty grid if no data
    }

    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    // Determine the extents of the grid
    for (const [x, y] of area) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }

    // Calculate dimensions
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    // Initialize the grid with zeros
    const grid = Array.from({ length: height }, () => Array(width).fill(0));

    // Populate the grid
    area.forEach(([x, y, color]) => {
      grid[y - minY][x - minX] = color; // Adjust to zero-based index
    });

    return grid;
  }
}
