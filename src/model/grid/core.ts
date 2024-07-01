import {
  AreaData,
  FieldsData,
  Grid,
  IslandClasses,
  IslandClassesOutput,
  UnitData,
} from "../../types";
import {
  classifyIsland,
  classifyIslands,
  getFirstNonZero,
} from "../../utils/fieldsData/classifyAreas";
import { getGridObjects, groups } from "../../utils/groups";
import { AreaGeometry } from "./area";

type AvailableSelectors = keyof typeof groups;

export abstract class CompositeObject extends AreaGeometry {
  id: string = "";
  color: number = -1;

  constructor(
    units: AreaData | undefined = [],
    origin: string,
    parentId: string
  ) {
    super(units);
    IDManager.generateID(origin, parentId, this);
  }

  extractGridData(grid: Grid, group: AvailableSelectors): FieldsData {
    return getGridObjects(grid, groups[group]);
  }

  classifyIslandData(grid: Grid): IslandClasses {
    const [x, y] = getFirstNonZero(grid);
    return classifyIsland(grid, x, y);
  }

  classifyIslandsData(fields: FieldsData): IslandClassesOutput {
    return classifyIslands(fields);
  }
}

class IDManager {
  private static instanceMap = new Map<string, { count: number }>();

  static generateID(
    origin: string,
    parentId: string,
    instance: CompositeObject
  ): void {
    const mapKey = `${parentId}_${origin}`;
    if (!this.instanceMap.has(mapKey)) {
      this.instanceMap.set(mapKey, { count: 0 });
    }

    const entry = this.instanceMap.get(mapKey);
    if (entry) {
      instance.id = `${origin}-${entry.count++}`;
    } else {
      throw new Error("Unable to generate ID");
    }
  }
}
