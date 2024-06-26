import { UnitData } from "../types";

class UnitsGroup {
  units: UnitData[] = [];
  constructor(unit: UnitData) {
    this.units.push(unit);
  }
}

export class Unit extends UnitsGroup {
  constructor(unit: UnitData) {
    super(unit);
  }
}
