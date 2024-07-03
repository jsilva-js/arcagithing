import {
  AreaData,
  AreaDataWithMirroredOutput,
  GridTypes,
  StatProps,
  StatsArr,
  UnitData,
  UnitDataWithMirroredOutput,
} from "../../../types";
import {
  aggregateTaskUnits,
  aggregateUnitsByGridType,
  createDAG,
  processNodesStatsArr,
} from "../../../utils/aggregation";
import { UnitsManager } from "../../grid/unit";
const mapToObject = (map: Map<string, any>) =>
  Object.fromEntries(map.entries());

export class ObjectStats {
  acc: StatsArr = [];

  addStats(color: number, parts: number, id: string): void {
    this.acc.push([color, parts, id, []]); // Use empty array for outArea if not provided
  }

  addStatsWithOutArea(
    color: number,
    parts: number,
    id: string,
    area: AreaDataWithMirroredOutput
  ): void {
    this.acc.push([color, parts, id, area]);
  }

  public processStatsProps(arr: StatsArr): StatProps {
    return processNodesStatsArr(arr);
  }

  public dagStats(dagData: { [key: string]: UnitData[] }) {
    return createDAG(dagData);
  }

  public getUnitsDag = () => {
    const units = UnitsManager.getInstance();
    return this.dagStats(units.unitsOrigin as {});
  };

  public getAggregateUnits = () => {
    const dag = this.getUnitsDag();
    return aggregateTaskUnits(dag);
  };

  public getAggregateUnitsByGridType = (gridType: GridTypes, idx: string) => {
    const rawRagTree = UnitsManager.getInstance();

    return aggregateUnitsByGridType(
      mapToObject(rawRagTree.unitsOrigin) as {},
      gridType,
      idx
    );
  };
}
