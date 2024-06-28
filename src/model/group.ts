import { AreaData, GridGroupTypes, UnitData } from "../types";
import { mountGrid } from "../utils/fieldsData/mountGrid";
import { getGridObjects } from "../utils/groups";

import { CompositeObject } from "./core";
import { SemiGroup } from "./semigroup";
import { Unit, UnitsManager } from "./unit";

export class Group extends CompositeObject {
  id: string = "";
  name = "group";
  semigroup: SemiGroup = new SemiGroup("group");
  isPrivate: boolean = false;
  privateGroups: AreaData[] = [];

  constructor(units: UnitData[], from: GridGroupTypes, count: number) {
    super(units);
    this.id = from + "_" + this.name + "_" + count;
    this.isPrivate = units.every((unit) => unit[2] === units[0][2]);

    if (this.isPrivate) {
      return;
    }

    const groupTypes: GridGroupTypes[] = [
      "public_body",
      "private_group",
      "private_body",
    ];

    groupTypes.forEach((groupType) => {
      const gridData = this.extractGridData(this.grid, groupType);
      Object.entries(this.classifyIslandsData(gridData)).forEach(
        ([islandClass, islandsData]) => {
          islandsData.forEach(({ area }) => {
            if (islandClass === "group") {
              this.privateGroups.push(area);
            } else if (islandClass === "body") {
              this.semigroup.addBody(area);
            } else if (islandClass === "limb") {
              this.semigroup.addLimb(area);
            } else if (islandClass === "unit") {
              this.semigroup.addUnit(area[0], this.id + "_" + groupType);
            }
          });
        }
      );
      console.log(UnitsManager.getInstance().unitsOrigin);
    });
  }

  // addBody(body: Body): void {
  //   this.bodies.push(body);
  // }

  // addLimb(limb: Limb): void {
  //   this.limbs.push(limb);
  // }
}
