import { AreaData } from "../../types";
import { Body } from "./body";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { Unit } from "./unit";

export class Public extends CompositeObject {
  public static publicCount = 0;
  private static lastParentId: string | null = null;

  children: (Group | Body | Unit)[] = [];

  constructor(units: AreaData[], origin: string, parentId: string) {
    super(units.flat(), origin);
    if (Public.lastParentId !== parentId) {
      Public.publicCount = 0; // Reset count if parent ID changes
    }

    Public.lastParentId = parentId;
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
        } else if (islandClass === "body") {
          this.children.push(
            new Body(area, this.id + "_body_" + Body.bodyCount++)
          );
        } else if (islandClass === "unit") {
          this.children.push(new Unit(area[0], this.id));
        }
      });
    });
  }
}
