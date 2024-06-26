import { AreaData, GridGroupTypes, UnitData } from "../types";
import { Body } from "./body";
import { Limb } from "./limb";
import { Unit } from "./unit";

export class SemiGroup {
  bodies: Body[] = [];
  limbs: Limb[] = [];
  units: Unit[] = [];
  origin: string = "";

  constructor(origin: string) {
    this.origin = origin;
  }

  addBody(body: AreaData): void {
    this.bodies.push(new Body(body));
  }

  // Method to add a limb to the semigroup
  addLimb(limb: AreaData): void {
    this.limbs.push(new Limb(limb));
  }

  addUnit(unit: UnitData, groupType: string): void {
    this.units.push(new Unit(unit, groupType));
  }
}
