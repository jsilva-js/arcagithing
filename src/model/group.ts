import { GridGroupTypes, UnitData } from "../types";
import { Body } from "./body";

import { CompositeObject } from "./core";
import { Unit, UnitsManager } from "./unit";

export class Group extends CompositeObject {
  groupUnits: Unit[] = [];
  children: Body[] = [];
  private static groupCount = 0;
  private static bodyCount = 0;
  constructor(units: UnitData[]) {
    super(units);
    Group.groupCount++;
    const groupTypes: GridGroupTypes[] = ["public_body"];

    groupTypes.forEach((groupType) => {
      const gridData = this.extractGridData(this.grid, groupType);

      console.log({ gridData });
      gridData.forEach((area) => {
        if (area.length > 1) {
          Group.bodyCount++;
          this.children.push(
            new Body(area, "group_" + Group.groupCount, Group.bodyCount)
          );
        } else {
          this.groupUnits.push(new Unit(area[0], "group" + Group.groupCount));
        }
      });
    });

    console.log(UnitsManager.getInstance().unitsOrigin);
  }
}
