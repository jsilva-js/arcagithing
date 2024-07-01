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

  addStats(color: number, parts: number, id: string): void {
    this.acc.push([color, parts, id]);
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

  getPrivateBodiesStats(grids: Grid[], gridType: GridTypes): StatProps[] {
    const result: StatProps[] = [];
    grids.forEach((grid: Grid, i) => {
      result.push(this.getPrivateBodyStats(grid, gridType, i.toString()));
    });

    return result;
  }
  getPrivateBodyStats(grid: Grid, gridType: GridTypes, idx: string): StatProps {
    const nodes: Body[] = [];
    const stats = new ObjectStats();

    const privateBodyAnalysis = new PrivateBody();
    privateBodyAnalysis.findAll(grid);
    nodes.push(...privateBodyAnalysis.nodes);

    nodes.forEach((node) => {
      stats.addStats(node.color, node.length, node.id);
    });

    stats.getAggregateUnitsByGridType(gridType, idx).forEach((restUnits) => {
      restUnits.forEach((unit) => {
        stats.addStats(unit[2] as number, 1, unit[3] as string);
      });
    });
    const statsProps = stats.processStatsProps(stats.acc);

    console.log(statsProps);
    return statsProps;
  }
}
