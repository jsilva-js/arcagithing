import { AreaData, RawNodeTreeData, UnitData } from "../../types";

export class UnitsManager {
  private static instance: UnitsManager;
  public unitsOrigin: Map<string, AreaData> = new Map(); // Use a Map for unitsOrigin

  private constructor() {}

  public static getInstance(): UnitsManager {
    if (!UnitsManager.instance) {
      UnitsManager.instance = new UnitsManager();
    }
    return UnitsManager.instance;
  }

  public getAreaById(id: string): AreaData | undefined {
    return this.unitsOrigin.get(id);
  }

  public setAreaById(id: string, area: AreaData): void {
    this.unitsOrigin.set(id, area);
  }

  public addUnit(unit: UnitData, groupType: string): void {
    if (!this.unitsOrigin.has(groupType)) {
      this.unitsOrigin.set(groupType, []);
    }
    this.unitsOrigin.get(groupType)?.push(unit);
  }
}

abstract class UnitsGroup {
  constructor(unit: UnitData, groupType: string) {
    UnitsManager.getInstance().addUnit(unit, groupType);
  }
}

export class Unit extends UnitsGroup {
  x: number = 0;
  y: number = 0;
  gx: number = 0;
  gy: number = 0;
  color: number = 0;
  children: Unit[] = [];
  constructor(unit: UnitData, groupType: string) {
    super(unit, groupType);
    this.x = unit[0];
    this.y = unit[1];
    this.color = unit[2];
    this.gx = unit[3];
    this.gy = unit[4];
  }
}
