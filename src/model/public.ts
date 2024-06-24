import { CompositeObject } from "./core";
import { Group } from "./group";
import { SemiGroup } from "./semigroup";
import { Unit } from "./unit";

export class Public extends CompositeObject {
  constructor(units: Unit[]) {
    super(units);
  }

  initialize(): void {
    // Further initialize public area, potentially categorizing units into groups and semigroups
  }
}
