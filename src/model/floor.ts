import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Floor extends CompositeObject {
  constructor(units: Unit[]) {
    super(units);
  }

  initialize(): void {
    // Additional initialization specific to Floor if needed
  }
}
