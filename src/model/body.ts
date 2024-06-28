import { AreaData } from "../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Body extends CompositeObject {
  thisCount = 0;
  rest: Unit[] = [];
  id: string = "";
  children: Body[] = [];

  constructor(area: AreaData, origin: string, thisCount: number) {
    super(area);
    this.id = origin + "_" + thisCount;

    const isThisPrivate = area.every((unit) => unit[2] === area[0][2]);

    if (isThisPrivate) {
      return;
    }

    const parts = this.extractGridData(this.grid, "private_body");

    parts.forEach((part) => {
      if (part.length > 1) {
        this.thisCount++;
        this.children.push(new Body(part, this.id, this.thisCount));
      } else {
        this.rest.push(new Unit(part[0], this.id));
      }
    });
  }
}
