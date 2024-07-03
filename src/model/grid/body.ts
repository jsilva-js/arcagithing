import { AreaData } from "../../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Body extends CompositeObject {
  color: number = -1;
  children: (Body | Unit)[] = [];

  constructor(area: AreaData, origin: string, parentId: string) {
    super(area, origin, parentId);

    const isThisPrivate = area.every((unit) => unit[2] === area[0][2]);

    if (isThisPrivate) {
      this.color = area[0][2];
      return;
    }

    const parts = this.extractGridData(this.grid, "private_body", this.origin);

    parts.forEach((part) => {
      if (part.length > 1) {
        this.children.push(new Body(part, `${this.id}_piece`, this.id));
      } else {
        this.children.push(new Unit(part[0], this.id));
      }
    });
  }
}
