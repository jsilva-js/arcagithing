import { AreaData, FieldsData, UnitData } from "../types";
import { classifyAreas } from "../utils/fieldsData/classifyAreas";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { SemiGroup } from "./semigroup";

export class Public extends CompositeObject {
  groups: Group[] = [];
  semigroups: SemiGroup[] = [];
  fragments: UnitData[] = [];

  constructor(units: AreaData[]) {
    super(units.flat());
    this.initialize(units);
  }

  initialize(units: AreaData[]): void {
    console.log(classifyAreas(units));
  }
}
