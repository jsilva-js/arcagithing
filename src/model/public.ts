import { AreaData, FieldsData, UnitData } from "../types";
import { classifyIslands } from "../utils/fieldsData/classifyAreas";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { SemiGroup } from "./semigroup";
import { Unit } from "./unit";

export class Public extends CompositeObject {
  groups: Group[] = [];
  semigroup: SemiGroup = new SemiGroup("public");
  incomplete: any[] = [];
  id = "public";

  constructor(units: AreaData[]) {
    super(units.flat());
    this.initialize(units);
  }

  initialize(units: AreaData[]): void {
    const islandsClasses = this.classifyIslandsData(units);
    const classCounters = new Map<string, number>();

    Object.keys(islandsClasses).forEach((islandClass) => {
      classCounters.set(islandClass, 0);
    });

    Object.entries(islandsClasses).forEach(([islandClass, islandsData]) => {
      const currentCount = classCounters.get(islandClass) || 0;
      classCounters.set(islandClass, currentCount + 1);

      islandsData.forEach(({ area }) => {
        if (islandClass === "group") {
          this.groups.push(new Group(area, "public", currentCount + 1));
        } else if (islandClass === "body") {
          this.semigroup.addBody(area);
        } else if (islandClass === "limb") {
          this.semigroup.addLimb(area);
        } else if (islandClass === "unit") {
          this.semigroup.addUnit(area[0], this.id);
        } else {
          this.incomplete.push(area);
        }
      });
    });
  }
}
