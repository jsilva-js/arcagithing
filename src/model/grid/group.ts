import { GridGroupTypes, UnitData } from "../../types";
import { Body } from "./body";

import { CompositeObject } from "./core";
import { Unit, UnitsManager } from "./unit";

export class Group extends CompositeObject {
  children: (Body | Unit)[] = [];
  public static groupCount = 0;
  constructor(units: UnitData[]) {
    super(units);
    const groupTypes: GridGroupTypes[] = ["public_body"];

    groupTypes.forEach((groupType) => {
      const gridData = this.extractGridData(this.grid, groupType);

      gridData.forEach((area) => {
        if (area.length > 1) {
          Body.bodyCount++;
          this.children.push(
            new Body(
              area,
              "group_" + Group.groupCount + "_body_" + Body.bodyCount
            )
          );
        } else {
          this.children.push(new Unit(area[0], "group_" + Group.groupCount));
        }
      });
    });

    console.log(UnitsManager.getInstance().unitsOrigin);
  }
}
