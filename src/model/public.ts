import { AreaData, FieldsData, UnitData } from "../types";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { SemiGroup } from "./semigroup";

export class Public extends CompositeObject {
  groups: Group[] = [];
  semigroups: SemiGroup[] = [];
  // individual units
  fragments: UnitData[] = [];
  constructor(units: FieldsData) {
    super(units.flat());
  }

  initialize(): void {
    // Further initialize public area, potentially categorizing units into groups and semigroups
  }
}
