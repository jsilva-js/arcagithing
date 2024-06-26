import { AreaData, UnitData } from "../types";
import { Body } from "./body";
import { CompositeObject } from "./core";
import { Limb } from "./limb";
import { SemiGroup } from "./semigroup";
export class Group extends CompositeObject {
  semigroups: SemiGroup[] = [];
  isPrivate: boolean = false;

  constructor(units: UnitData[]) {
    super(units);
  }

  // addBody(body: Body): void {
  //   this.bodies.push(body);
  // }

  // addLimb(limb: Limb): void {
  //   this.limbs.push(limb);
  // }
}
