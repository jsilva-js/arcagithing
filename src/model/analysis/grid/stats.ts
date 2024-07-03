import {
  AreaData,
  GridTypes,
  StatProps,
  StatsArr,
  UnitData,
} from "../../../types";
import {
  aggregateTaskUnits,
  aggregateUnitsByGridType,
  createDAG,
  processNodesStatsArr,
} from "../../../utils/aggregation";
import { UnitsManager } from "../../grid/unit";

export class ObjectStats {
  acc: StatsArr = [];

  addStats(color: number, parts: number, id: string): void {
    this.acc.push([color, parts, id, []]); // Use empty array for outArea if not provided
  }

  addStatsWithOutArea(
    color: number,
    parts: number,
    id: string,
    outArea: AreaData
  ): void {
    this.acc.push([color, parts, id, outArea]);
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
      rawRagTree.unitsOrigin as {},
      gridType,
      idx
    );
  };
}
