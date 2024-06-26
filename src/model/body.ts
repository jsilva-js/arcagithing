import { AreaData } from "../types";
import { CompositeObject } from "./core";

export class Body extends CompositeObject {
  isPrivate: boolean = false;
  constructor(area: AreaData) {
    super(area);
    this.isPrivate = area.every((unit) => unit[2] === area[0][2]);
  }
}
