import {
  AreaData,
  FieldsData,
  Grid,
  IslandClasses,
  IslandClassesOutput,
  UnitData,
} from "../types";
import {
  classifyIsland,
  classifyIslands,
  getFirstNonZero,
} from "../utils/fieldsData/classifyAreas";
import { getGridObjects, groups } from "../utils/groups";
import { AreaGeometry } from "./area";

type AvailableSelectors = keyof typeof groups;

export abstract class CompositeObject extends AreaGeometry {
  area: UnitData[] = [];
  constructor(units: AreaData = []) {
    super(units); // Initialize AreaGeometry
    this.area = units;
  }

  extractGridData(grid: Grid, group: AvailableSelectors): FieldsData {
    const data = getGridObjects(grid, groups[group]);
    return data;
  }

  classifyIslandData(grid: Grid): IslandClasses {
    const [x, y] = getFirstNonZero(grid);
    return classifyIsland(grid, x, y);
  }

  classifyIslandsData(fields: FieldsData): IslandClassesOutput {
    return classifyIslands(fields);
  }

  // Method to retrieve all units
  getAllUnits(): UnitData[] {
    return this.area;
  }
}
