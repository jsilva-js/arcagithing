import { AreaData } from "../types";
import { CompositeObject } from "./core";

export class Body extends CompositeObject {
  isPrivate: boolean = false;
  parts: Body[] = [];

  constructor(area: AreaData) {
    super(area);
    this.isPrivate = area.every((unit) => unit[2] === area[0][2]);
    if (this.isPrivate) {
      return;
    }

    this.extractGridData(this.grid, "private_body").forEach((privateBody) => {
      this.parts.push(new Body(privateBody));
    });
  }
}
