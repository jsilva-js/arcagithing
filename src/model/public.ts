import { AreaData, FieldsData, UnitData } from "../types";
import { classifyIslands } from "../utils/fieldsData/classifyAreas";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { SemiGroup } from "./semigroup";

export class Public extends CompositeObject {
  groups: Group[] = [];
  semigroup: SemiGroup = new SemiGroup();
  fragments: UnitData[] = [];
  incomplete: any[] = [];

  constructor(units: AreaData[]) {
    super(units.flat());
    this.initialize(units);
  }

  initialize(units: AreaData[]): void {
    const islandsClasses = classifyIslands(units);

    Object.entries(islandsClasses).forEach(([islandClass, islandsData]) => {
      islandsData.forEach(({ area }) => {
        if (islandClass === "group") {
          this.groups.push(new Group(area));
        } else if (islandClass === "body") {
          this.semigroup.addBody(area);
        } else if (islandClass === "limb") {
          this.semigroup.addLimb(area);
        } else if (islandClass === "unit") {
          this.fragments.push(area[0]);
        } else {
          this.incomplete.push(area);
        }
      });
    });
  }
}
