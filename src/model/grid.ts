import { CompositeObject } from "./core";
import { Floor } from "./floor";
import { Public } from "./public";
import { FieldsData, Grid as GridData } from "../types";
import { Unit } from "./unit";
import { getAllFields } from "../utils/groups";

export class Grid extends CompositeObject {
  floor: Floor;
  publicArea: Public;

  constructor(gridData: GridData) {
    super([]);
    this.floor = new Floor([]);
    this.publicArea = new Public([]);
    this.initializeWithData(gridData);
  }

  // Process initial grid data and assign to floor and public
  initializeWithData(gridData: GridData): void {
    let floorUnits: Unit[] = [];
    let publicUnits: Unit[] = [];

    // Example data processing logic

    this.getFieldsData(gridData).floor;

    this.floor = new Floor(floorUnits);
    this.publicArea = new Public(publicUnits);
  }

  getFieldsData(grid: GridData): { floor: FieldsData; publicArea: FieldsData } {
    const { floor, publicArea } = getAllFields(grid);
    return {
      floor,
      publicArea,
    };
  }

  initialize(): void {
    // Initialization can be propagated down to children if needed
    this.floor.initialize();
    this.publicArea.initialize();
  }
}
