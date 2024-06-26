import { AreaData } from "../types";
import { Body } from "./body";
import { Limb } from "./limb";

export class SemiGroup {
  bodies: Body[] = [];
  limbs: Limb[] = [];

  constructor() {}

  addBody(body: AreaData): void {
    this.bodies.push(new Body(body));
  }

  // Method to add a limb to the semigroup
  addLimb(limb: AreaData): void {
    this.limbs.push(new Limb(limb));
  }
}
