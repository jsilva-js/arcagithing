import { AreaData, UnitData } from "../types";
import { Unit } from "./unit";

export abstract class CompositeObject {
  units: Unit[];

  constructor(units: Unit[]) {
    this.units = units;
  }

  abstract initialize(): void;

  setArea(unitsData: AreaData): void {
    unitsData.forEach(([x, y, color]) => {
      this.units.push(this.createUnit([x, y, color]));
    });
  }

  createUnit(unitData: UnitData): Unit {
    // x, y, color
    return new Unit(unitData[0], unitData[1], unitData[2]);
  }
  // Method to retrieve all units
  getAllUnits(): Unit[] {
    return this.units;
  }
}
