import { AreaData } from "../../types";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { Unit } from "./unit";

export class Public extends CompositeObject {
  public static publicCount = 0;
  children: (Group | Unit)[] = [];

  constructor(units: AreaData[], origin: string) {
    super(units.flat(), origin);
    this.initialize(units);
  }

  initialize(units: AreaData[]): void {
    const islandsClasses = this.classifyIslandsData(units);

    Object.entries(islandsClasses).forEach(([islandClass, islandsData]) => {
      islandsData.forEach(({ area }) => {
        if (islandClass === "group") {
          this.children.push(
            new Group(area, this.id + "_group_" + Group.groupCount++)
          );
        } else if (islandClass === "unit") {
          this.children.push(new Unit(area[0], this.id));
        }
      });
    });
  }
}
