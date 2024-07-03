import { GridGroupTypes, UnitData } from "../../types";
import { Body } from "./body";

import { CompositeObject } from "./core";
import { Unit, UnitsManager } from "./unit";

export class Group extends CompositeObject {
  children: (Body | Unit)[] = [];

  constructor(units: UnitData[], origin: string, parentId: string) {
    super(units, origin, parentId);
    const groupTypes: GridGroupTypes[] = ["public_body"];

    groupTypes.forEach((groupType) => {
      const gridData = this.extractGridData(this.grid, groupType, this.origin);

      gridData.forEach((area) => {
        if (area.length > 1) {
          this.children.push(new Body(area, `${this.id}_body`, this.id));
        } else {
          this.children.push(new Unit(area[0], this.id));
        }
      });
    });
  }
}
