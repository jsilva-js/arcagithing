import { Floor } from "./floor";
import { Public } from "./public";
import { Grid as GridData } from "../types";
import { CompositeObject } from "./core";

export class Grid extends CompositeObject {
  floor: Floor | undefined;
  fields: Public | undefined;

  constructor(gridData: GridData) {
    super([]);
    const floor = this.extractGridData(gridData, "floor");
    const publicFields = this.extractGridData(gridData, "public");

    this.floor = new Floor(floor);
    this.fields = new Public(publicFields);
  }
}
