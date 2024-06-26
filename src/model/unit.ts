import { GridGroupTypes, UnitData } from "../types";

export class UnitsManager {
  private static instance: UnitsManager;
  public unitsOrigin: { [key in GridGroupTypes]?: UnitData[] } = {};

  private constructor() {}

  public static getInstance(): UnitsManager {
    if (!UnitsManager.instance) {
      UnitsManager.instance = new UnitsManager();
    }
    return UnitsManager.instance;
  }

  public addUnit(unit: UnitData, groupType: GridGroupTypes): void {
    if (!this.unitsOrigin[groupType]) {
      this.unitsOrigin[groupType] = [];
    }
    this.unitsOrigin[groupType]?.push(unit);
  }
}

abstract class UnitsGroup {
  constructor(unit: UnitData, groupType: GridGroupTypes) {
    UnitsManager.getInstance().addUnit(unit, groupType);
  }
}

export class Unit extends UnitsGroup {
  x: number = 0;
  y: number = 0;
  color: number = 0;
  constructor(unit: UnitData, groupType: GridGroupTypes) {
    super(unit, groupType);
    this.x = unit[0];
    this.y = unit[1];
    this.color = unit[2];
  }
}
