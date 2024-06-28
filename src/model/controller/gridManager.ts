import { Grid as GridData } from "../../types";
import { Grid, GridNature, GridType } from "../grid";

export class DataStore {
  private grids: Grid[] = [];

  addGrid(
    data: GridData,
    type: GridType,
    nature: GridNature,
    sampleId: string
  ): Grid {
    const grid = new Grid(
      data,
      type,
      nature,
      `${sampleId}_${type}_${this.grids.length + 1}`
    );
    this.grids.push(grid);
    return grid;
  }

  getGridsByNatureAndType(nature: GridNature, type: GridType): Grid[] {
    return this.grids.filter(
      (grid) => grid.nature === nature && grid.type === type
    );
  }
}
export class GridManager<T extends Grid> {
  private dataStore: DataStore;
  private sampleId: string;

  constructor(dataStore: DataStore, sampleId: string) {
    this.dataStore = dataStore;
    this.sampleId = sampleId;
  }

  addGrid(data: GridData, type: GridType, nature: GridNature): T {
    return this.dataStore.addGrid(data, type, nature, this.sampleId) as T;
  }

  getGridsByNatureAndType(nature: GridNature, type: GridType): T[] {
    return this.dataStore.getGridsByNatureAndType(nature, type) as T[];
  }
}
