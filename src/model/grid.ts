import { CompositeObject } from "./core";
import { Floor } from "./floor";
import { Public } from "./public";
import { Grid as GridData } from "../types";
import { getGridObjects, groups } from "../utils/groups";

export class Grid extends CompositeObject {
  floor: Floor | undefined;
  fields: Public | undefined;

  constructor(gridData: GridData) {
    const publicFields = getGridObjects(gridData, groups.public);
    const floor = getGridObjects(gridData, groups.floor);
    super([...publicFields.flat(), ...floor.flat()]);
    this.floor = new Floor(floor);
    this.fields = new Public(publicFields);
  }
}
