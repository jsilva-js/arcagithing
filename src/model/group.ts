import { Body } from "./body";
import { CompositeObject } from "./core";
import { Limb } from "./limb";

export class Group extends CompositeObject {
  bodies: Body[];
  limbs: Limb[];

  constructor() {
    super();
    this.bodies = [];
    this.limbs = [];
  }

  addBody(body: Body): void {
    this.bodies.push(body);
    this.children.push(body);
  }

  addLimb(limb: Limb): void {
    this.limbs.push(limb);
    this.children.push(limb);
  }
}
