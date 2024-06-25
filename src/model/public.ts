import { AreaData, FieldsData, UnitData } from "../types";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { SemiGroup } from "./semigroup";

export class Public extends CompositeObject {
  // group = [body + limb]
  // semigroup = [body] + [limb]
  groups: Group[] = [];
  semigroups: SemiGroup[] = [];
  fragments: UnitData[] = [];
  constructor(units: FieldsData) {
    super(units.flat());
    this.initialize(units);
  }

  initialize(fields: FieldsData): void {
    const thisFields = this.grid;

    thisFields.forEach((field, index) => {});
  }
}
