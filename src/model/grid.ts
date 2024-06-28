import { Floor } from "./floor";
import { Public } from "./public";
import { Grid as GridData } from "../types";
import { CompositeObject } from "./core";

export class Grid extends CompositeObject {
  children: (Floor | Public)[] = [];

  constructor(gridData: GridData) {
    super([]);
    const floor = this.extractGridData(gridData, "floor");
    const publicFields = this.extractGridData(gridData, "public");

    this.children.push(new Floor(floor));
    this.children.push(new Public(publicFields));
  }
}
