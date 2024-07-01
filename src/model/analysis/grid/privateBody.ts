import { GridTypes, StatProps, StatsArr, UnitData } from "../../../types";
import {
  aggregateTaskUnits,
  aggregateUnitsByGridType,
  createDAG,
  processNodesStatsArr,
} from "../../../utils/aggregation";
import { Grid } from "../../grid";
import { Body } from "../../grid/body";
import { UnitsManager } from "../../grid/unit";

export class ObjectStats {
  acc: StatsArr = [];

  addStats(color: number, parts: number): void {
    this.acc.push([color, parts]);
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

  public getAggregateUnitsByGridType = (gridType: GridTypes) => {
    const rawRagTree = UnitsManager.getInstance();

    return aggregateUnitsByGridType(rawRagTree.unitsOrigin as {}, gridType);
  };
}
export class PrivateBody extends ObjectStats {
  nodes: Body[] = [];

  constructor() {
    super();
  }

  public findAll(node: any): void {
    if (node instanceof Body && !node.children.length) {
      this.nodes.push(node);
    }

    if (node.children) {
      node.children.forEach((child: any) => this.findAll(child));
    }
  }

  findPrivateBodies(grid: Grid): Body[] {
    this.findAll(grid);
    return this.nodes;
  }
}
