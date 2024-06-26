import { AreaData } from "../types";
import { CompositeObject } from "./core";

export class Body extends CompositeObject {
  constructor(area: AreaData) {
    super(area);
  }
}
