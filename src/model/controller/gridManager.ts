import { Grid as GridData } from "../../types";
import { Grid, GridNature, GridType } from "../grid";

export class GridManager<T extends Grid> {
  protected grids: T[] = [];
  public static inputCount = 0;
  public static outputCount = 0;
  sampleId: string = "";
  constructor(sampleId: string) {
    this.sampleId = sampleId;
  }
  addGrid(data: GridData, type: GridType, nature: GridNature): T {
    if (type === "input") {
      GridManager.inputCount++;
    } else if (type === "output") {
      GridManager.outputCount++;
    }
    const grid = new Grid(
      data,
      type,
      nature,
      this.sampleId +
        "_" +
        (type === "input" ? GridManager.inputCount : GridManager.outputCount)
    ) as T;
    this.grids.push(grid);

    return grid;
  }

  getGridsByNatureAndType(nature: GridNature, type: GridType): T[] {
    return this.grids.filter(
      (grid) => grid.nature === nature && grid.type === type
    );
  }
}
