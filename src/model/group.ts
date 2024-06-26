import { AreaData, GridGroupTypes, UnitData } from "../types";
import { getGridObjects } from "../utils/groups";

import { CompositeObject } from "./core";
import { SemiGroup } from "./semigroup";
import { Unit } from "./unit";

export class Group extends CompositeObject {
  semigroup: SemiGroup = new SemiGroup();
  isPrivate: boolean = false;
  privateGroups: AreaData[] = [];

  constructor(units: UnitData[]) {
    super(units);
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
      const groups = this.extractGridData(this.grid, groupType);
      Object.entries(this.classifyIslandsData(groups)).forEach(
        ([islandClass, islandsData]) => {
          islandsData.forEach(({ area }) => {
            if (islandClass === "group") {
              this.privateGroups.push(area);
            } else if (islandClass === "body") {
              this.semigroup.addBody(area);
            } else if (islandClass === "limb") {
              this.semigroup.addLimb(area);
            } else if (islandClass === "unit") {
              this.semigroup.units.push(new Unit(area[0]));
            }
          });
        }
      );
    });
  }

  // addBody(body: Body): void {
  //   this.bodies.push(body);
  // }

  // addLimb(limb: Limb): void {
  //   this.limbs.push(limb);
  // }
}
