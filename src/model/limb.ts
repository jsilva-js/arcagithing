import { CompositeObject } from "./core";

export class Limb extends CompositeObject {
  publicLimb: boolean;

  constructor(publicLimb: boolean) {
    super();
    this.publicLimb = publicLimb;
  }
}
