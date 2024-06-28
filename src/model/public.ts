import { AreaData } from "../types";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { Unit } from "./unit";

export class Public extends CompositeObject {
  groups: Group[] = [];
  incomplete: AreaData[] = [];
  publicUnits: Unit[] = [];
  id = "public";

  constructor(units: AreaData[]) {
    super(units.flat());

    this.initialize(units);
  }

  initialize(units: AreaData[]): void {
    const islandsClasses = this.classifyIslandsData(units);

    console.log(islandsClasses);
    Object.entries(islandsClasses).forEach(([islandClass, islandsData]) => {
      islandsData.forEach(({ area }) => {
        if (islandClass === "group") {
          this.groups.push(new Group(area));
        } else if (islandClass === "unit") {
          this.publicUnits.push(new Unit(area[0], this.id));
        } else if (islandClass === "incomplete") {
          this.incomplete.push(area);
        }
      });
    });
  }
}
