import { UnitData } from "../types";

class UnitsGroup {
  units: UnitData[] = [];
  constructor(unit: UnitData) {
    this.units.push(unit);
  }
}

export class Unit extends UnitsGroup {
  x: number = 0;
  y: number = 0;
  color: number = 0;
  constructor(unit: UnitData) {
    super(unit);
    this.x = unit[0];
    this.y = unit[1];
    this.color = unit[2];
  }
}
