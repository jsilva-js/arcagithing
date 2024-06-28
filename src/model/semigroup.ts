import { AreaData, GridGroupTypes, UnitData } from "../types";
import { Body } from "./body";
import { Limb } from "./limb";
import { Unit } from "./unit";

export class SemiGroup {
  bodies: Body[] = [];
  limbs: Limb[] = [];
  units: Unit[] = [];
  origin: string = "";
  name: string = "";

  constructor(origin: string) {
    this.origin = origin;
    this.name = origin + "_" + "sg";
  }

  addBody(body: AreaData): void {
    const isBodyPrivate = body.every((unit) => unit[2] === body[0][2]);

    if (isBodyPrivate) {
      Body.c++;
      Body.parts.push(new Body(body, this.name + "_" + Body.c));
    } else {
      this.bodies.push(new Body(body, this.name));
    }
  }

  // Method to add a limb to the semigroup
  addLimb(limb: AreaData): void {
    this.limbs.push(new Limb(limb));
  }

  addUnit(unit: UnitData, origin: string): void {
    this.units.push(new Unit(unit, origin));
  }
}
