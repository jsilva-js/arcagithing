import { AreaData, Grid } from "../types";
import { mountGrid } from "../utils/fieldsData/mountGrid";

export abstract class AreaGeometry {
  width: number;
  height: number;
  population: number;
  grid: Grid;

  constructor(area: AreaData) {
    this.width = 0;
    this.height = 0;
    this.population = area.length || 0;
    this.grid = this.mountArea(area);
  }

  mountArea(area: AreaData) {
    return mountGrid(area);
  }
}
