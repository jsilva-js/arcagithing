import { AreaData, GridGroupTypes, UnitData } from "../types";
import { mountGrid } from "../utils/fieldsData/mountGrid";
import { getGridObjects } from "../utils/groups";
import { Body } from "./body";

import { CompositeObject } from "./core";
import { SemiGroup } from "./semigroup";
import { Unit, UnitsManager } from "./unit";

export class Group extends CompositeObject {
  groupUnits: Unit[] = [];
  private static groupCount = 0;
  private static bodyCount = 0;
  constructor(units: UnitData[]) {
    super(units);
    Group.groupCount++;

    console.log(units);
    const groupTypes: GridGroupTypes[] = ["public_body"];

    groupTypes.forEach((groupType) => {
      const gridData = this.extractGridData(this.grid, groupType);

      console.log({ gridData });
      gridData.forEach((area) => {
        if (area.length > 1) {
          Group.bodyCount++;
          new Body(area, "group_" + Group.groupCount, Group.bodyCount);
        } else {
          this.groupUnits.push(new Unit(area[0], "group" + Group.groupCount));
        }
      });

      // ).forEach(
      //     ([islandClass, islandsData]) => {
      //       islandsData.forEach(({ area }) => {
      //         console.log(islandClass, islandsData);
      // if (islandClass === "body" && area.length > 1) {
      //   Group.bodyCount++;
      //   new Body(area, "group_" + Group.groupCount, Group.bodyCount);
      // } else if (islandClass === "unit") {
      //   this.groupUnits.push(new Unit(area[0], "group"));
      // }
    });

    console.log(UnitsManager.getInstance().unitsOrigin);
  }

  // addBody(body: Body): void {
  //   this.bodies.push(body);
  // }

  // addLimb(limb: Limb): void {
  //   this.limbs.push(limb);
  // }
}
