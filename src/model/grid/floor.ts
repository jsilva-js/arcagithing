import { AreaData, UnitData } from "../../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Floor extends CompositeObject {
  public static floorCount = 0;
  children: Unit[] = [];
  constructor(areas: AreaData[], origin: string, parentId: string = "") {
    super(areas.flat(), origin, parentId);
  }
}
