import { AreaData } from "../../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Body extends CompositeObject {
  public static pieceCount = 0;
  id: string = "";
  children: (Body | Unit)[] = [];
  public static bodyCount = 0;

  constructor(area: AreaData, origin: string) {
    super(area);
    this.id = origin;

    const isThisPrivate = area.every((unit) => unit[2] === area[0][2]);

    if (isThisPrivate) {
      return;
    }

    const parts = this.extractGridData(this.grid, "private_body");

    parts.forEach((part) => {
      if (part.length > 1) {
        Body.pieceCount++;
        this.children.push(
          new Body(part, this.id + "_" + "piece_" + Body.pieceCount)
        );
      } else {
        this.children.push(new Unit(part[0], this.id));
      }
    });
  }
}
