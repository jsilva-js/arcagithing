import { AreaData, Grid } from "../types";
import { mountGrid } from "../utils/fieldsData/mountGrid";

export abstract class AreaGeometry {
  width: number = 0;
  height: number = 0;
  population: number = 0;
  grid: Grid = [];

  constructor(area: AreaData) {
    if (area.length) {
      this.population = area.length || 0;
      this.grid = this.mountArea(area);
      this.width = this.grid[0].length;
      this.height = this.grid.length;
    }
  }

  mountArea(area: AreaData) {
    return mountGrid(area);
  }
}
