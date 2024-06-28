import { AreaData } from "../../types";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { Unit } from "./unit";

export class Public extends CompositeObject {
  children: (Group | Unit)[] = [];
  id = "public";

  constructor(units: AreaData[]) {
    super(units.flat());

    this.initialize(units);
  }

  initialize(units: AreaData[]): void {
    const islandsClasses = this.classifyIslandsData(units);

    Object.entries(islandsClasses).forEach(([islandClass, islandsData]) => {
      islandsData.forEach(({ area }) => {
        if (islandClass === "group") {
          Group.groupCount++;
          this.children.push(new Group(area));
        } else if (islandClass === "unit") {
          this.children.push(new Unit(area[0], this.id));
        }
      });
    });
  }
}
