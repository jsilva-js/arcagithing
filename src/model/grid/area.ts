import { AreaData, Grid } from "../../types";
import { mountGrid } from "../../utils/fieldsData/mountGrid";

export abstract class AreaGeometry {
  width: number = 0;
  height: number = 0;
  length: number = 0;
  grid: Grid = [];
  area: AreaData = [];

  constructor(area: AreaData) {
    if (area.length) {
      this.updateArea(area);
    }
  }

  updateArea(area: AreaData) {
    this.area = area;
    this.length = area.length || 0;
    this.grid = this.mountArea(area);
    this.width = this.grid[0].length;
    this.height = this.grid.length;
  }

  mountArea(area: AreaData) {
    return mountGrid(area);
  }
}
