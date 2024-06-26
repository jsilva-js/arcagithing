import { AreaData, UnitData } from "../types";
import { CompositeObject } from "./core";

export class Floor extends CompositeObject {
  constructor(areas: AreaData[]) {
    super(areas.flat());
  }
}
