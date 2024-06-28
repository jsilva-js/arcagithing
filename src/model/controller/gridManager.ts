import { Grid, GridNature, GridType } from "../grid";

export class GridManager<T extends Grid> {
  protected grids: T[] = [];

  addGrid(grid: T) {
    this.grids.push(grid);
  }

  getGridsByPurposeAndType(purpose: GridNature, type: GridType): T[] {
    return this.grids.filter(
      (grid) => grid.nature === purpose && grid.type === type
    );
  }
}
