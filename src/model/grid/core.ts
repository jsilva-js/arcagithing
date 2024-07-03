import {
  AreaData,
  FieldsData,
  Grid,
  GridOriginIdx,
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

  extractGridData(
    grid: Grid,
    group: AvailableSelectors,
    origins: GridOriginIdx
  ): FieldsData {
    return getGridObjects(grid, groups[group], origins);
  }

  classifyIslandData(grid: Grid): IslandClasses {
    const [x, y] = getFirstNonZero(grid);
    return classifyIsland(grid, x, y);
  }

  classifyIslandsData(fields: FieldsData): IslandClassesOutput {
    return classifyIslands(fields);
  }
}
export class IDManager {
  private static countMap = new Map<string, { count: number }>();
  private static instanceMap = new Map<string, CompositeObject>();

  static generateID(
    origin: string,
    parentId: string,
    instance: CompositeObject
  ): void {
    const mapKey = `${parentId}_${origin}`;
    if (!this.countMap.has(mapKey)) {
      this.countMap.set(mapKey, { count: 0 });
    }

    const entry = this.countMap.get(mapKey);
    if (entry) {
      instance.id = `${origin}-${entry.count++}`;
      this.instanceMap.set(instance.id, instance);
    } else {
      throw new Error("Unable to generate ID");
    }
  }

  static getInstanceByID(id: string): CompositeObject | undefined {
    return this.instanceMap.get(id);
  }

  static getAllInstances(): Map<string, CompositeObject> {
    return this.instanceMap;
  }
}
