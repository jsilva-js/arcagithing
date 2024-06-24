import { AreaData, FieldsData, UnitData } from "../types";
import { AreaGeometry } from "./area";

export abstract class CompositeObject extends AreaGeometry {
  units: UnitData[];
  constructor(units: AreaData = []) {
    super(units); // Initialize AreaGeometry
    this.units = units;
  }

  // Method to retrieve all units
  getAllUnits(): UnitData[] {
    return this.units;
  }
}
