import { CompositeObject } from "./core";
import { Floor } from "./floor";
import { Public } from "./public";
import { Grid as GridData } from "../types";
import { getAllFields } from "../utils/groups";

export class Grid extends CompositeObject {
  floor: Floor;
  fields: Public;

  constructor(gridData: GridData) {
    super([]);
    this.floor = new Floor([]);
    this.fields = new Public([]);
    this.initializeData(gridData);
  }

  // Process initial grid data and assign to floor and public
  initializeData(gridData: GridData): void {
    const { fields, floor } = getAllFields(gridData);
    this.floor = new Floor(floor);
    this.fields = new Public(fields);
  }

  initialize(): void {
    // Initialization can be propagated down to children if needed
    this.floor.initialize();
    this.fields.initialize();
  }
}
