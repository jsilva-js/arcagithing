import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Floor extends CompositeObject {
  holes: Unit[];

  constructor() {
    super();
    this.holes = [];
  }

  addHole(hole: Unit): void {
    this.holes.push(hole);
  }
}
