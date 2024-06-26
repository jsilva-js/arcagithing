import { AreaData, UnitData } from "../types";
import { CompositeObject } from "./core";

export class Floor {
  holes: AreaData[] = [];

  constructor(units: AreaData[]) {}

  initialize(): void {
    // Additional initialization specific to Floor if needed
  }
}
