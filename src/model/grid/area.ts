import { AreaData, Grid, GridOriginIdx } from "../../types";
import { mountGrid } from "../../utils/fieldsData/mountGrid";

export abstract class AreaGeometry {
  width: number = 0;
  height: number = 0;
  length: number = 0;
  grid: Grid = [];
  area: AreaData = [];
  origin: GridOriginIdx = { x: 0, y: 0 };
  color: number = -1;

  constructor(area: AreaData) {
    if (area.length) {
      this.updateArea(area);
    }
  }

  setColorIfPrivate(area: AreaData) {
    if (area.length > 1 && this.isThisPrivate(area)) {
      this.color = area[0][2];
      return true;
    } else {
      return false;
    }
  }

  isThisPrivate(area: AreaData) {
    return area.every((unit) => unit[2] === area[0][2]);
  }

  updateArea(area: AreaData) {
    this.area = area;
    this.length = area.length || 0;
    const { grid, gridIdx } = this.mountArea(area);
    const origins = gridIdx[0][0];
    this.grid = grid;
    this.origin = { x: origins[0], y: origins[1] };

    this.width = this.grid[0].length;
    this.height = this.grid.length;
  }

  mountArea(area: AreaData) {
    return mountGrid(area);
  }
}
