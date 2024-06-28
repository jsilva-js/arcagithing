import { AreaData } from "../../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Body extends CompositeObject {
  public static pieceCount = 0;
  public static bodyCount = 0;
  public static allBody: Body[] = [];
  color: number = -1;
  children: (Body | Unit)[] = [];

  constructor(area: AreaData, origin: string) {
    super(area, origin);
    Body.allBody.push(this);
    this.id = origin;

    const isThisPrivate = area.every((unit) => unit[2] === area[0][2]);

    if (isThisPrivate) {
      this.color = area[0][2];
      return;
    }

    const parts = this.extractGridData(this.grid, "private_body");

    parts.forEach((part) => {
      if (part.length > 1) {
        this.children.push(
          new Body(part, this.id + "_piece_" + Body.pieceCount++)
        );
      } else {
        this.children.push(new Unit(part[0], this.id));
      }
    });
  }
}
