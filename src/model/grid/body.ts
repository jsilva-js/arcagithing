import { AreaData } from "../../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Body extends CompositeObject {
  children: (Body | Unit)[] = [];

  constructor(area: AreaData, origin: string, parentId: string) {
    super(area, origin, parentId);

    if (this.setColorIfPrivate(area)) {
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
