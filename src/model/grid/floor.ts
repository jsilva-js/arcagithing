import { AreaData, UnitData } from "../../types";
import { CompositeObject } from "./core";

export class Floor extends CompositeObject {
  public static floorCount = 0;
  constructor(areas: AreaData[], origin: string) {
    super(areas.flat(), origin);
  }
}
