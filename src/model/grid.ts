import { CompositeObject } from "./core";
import { Floor } from "./floor";
import { Public } from "./public";
import { Grid as GridData } from "../types";
import { getGridObjects, groups } from "../utils/groups";

export class Grid extends CompositeObject {
  floor: Floor | [] = [];
  fields: Public | [] = [];

  constructor(gridData: GridData) {
    super([]);
    this.initializeData(gridData);
  }

  // Process initial grid data and assign to floor and public
  initializeData(gridData: GridData): void {
    const publicFields = getGridObjects(gridData, groups.public);
    const floor = getGridObjects(gridData, groups.floor);
    this.floor = new Floor(floor);
    this.fields = new Public(publicFields);
  }
}
