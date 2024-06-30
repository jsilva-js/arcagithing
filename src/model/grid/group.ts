import { GridGroupTypes, UnitData } from "../../types";
import { Body } from "./body";

import { CompositeObject } from "./core";
import { Unit, UnitsManager } from "./unit";

export class Group extends CompositeObject {
  children: (Body | Unit)[] = [];
  public static groupCount = 0;
  constructor(units: UnitData[], origin: string) {
    super(units, origin);
    const groupTypes: GridGroupTypes[] = ["public_body"];

    groupTypes.forEach((groupType) => {
      const gridData = this.extractGridData(this.grid, groupType);

      gridData.forEach((area) => {
        if (area.length > 1) {
          this.children.push(
            new Body(area, this.id + "_body_" + Body.bodyCount++)
          );
        } else {
          this.children.push(new Unit(area[0], this.id));
        }
      });
    });

    // console.log(UnitsManager.getInstance().unitsOrigin);
  }
}
