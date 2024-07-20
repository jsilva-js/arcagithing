import { AreaData } from "../../types";
import { Body } from "./body";
import { CompositeObject } from "./core";
import { Group } from "./group";
import { Limb } from "./limb";
import { Unit } from "./unit";

export class Public extends CompositeObject {
  children: (Group | Body | Unit | Limb)[] = [];

  constructor(units: AreaData[], origin: string, parentId: string) {
    super(units.flat(), origin, parentId);
    this.initialize(units);
  }

  initialize(units: AreaData[]): void {
    const islandsClasses = this.classifyIslandsData(units);

    Object.entries(islandsClasses).forEach(([islandClass, islandsData]) => {
      islandsData.forEach(({ area }) => {
        if (islandClass === "group") {
          this.children.push(new Group(area, `${this.id}_group`, this.id));
        } else if (islandClass === "body") {
          this.children.push(new Body(area, `${this.id}_body`, this.id));
        } else if (islandClass === "limb") {
          this.children.push(new Limb(area, `${this.id}_limb`, this.id));
        } else if (islandClass === "unit") {
          this.children.push(new Unit(area[0], this.id));
        }
      });
    });
  }
}
