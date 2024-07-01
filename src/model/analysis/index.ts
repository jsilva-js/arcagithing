import { GridTypes } from "../../types";
import { logGrid } from "../../utils/log";
import { GridManager } from "../controller/gridManager";
import { Grid, GridInput, GridOutput } from "../grid";
import { AreaGeometry } from "../grid/area";
import { Body } from "../grid/body";
import { CompositeObject } from "../grid/core";
import { UnitsManager } from "../grid/unit";
import { ObjectStats, PrivateBody } from "./grid/privateBody";

export class AnalysisManager<T extends Grid> extends GridManager<T> {
  getConstraints(grids: Grid[], gridType: GridTypes): void {
    const nodes: Body[] = [];
    const stats = new ObjectStats();

    grids.forEach((grid: Grid) => {
      const privateBodyAnalysis = new PrivateBody();
      privateBodyAnalysis.findAll(grid);
      nodes.push(...privateBodyAnalysis.nodes);
    });

    nodes.forEach((node) => {
      stats.addStats(node.color, node.length);
    });

    stats.getAggregateUnitsByGridType(gridType).forEach((restUnits) => {
      restUnits.forEach((unit) => {
        stats.addStats(unit[2], 1);
      });
    });
    const statsProps = stats.processStatsProps(stats.acc);

    console.log(statsProps);
  }
}

{
  input: [
    // input 1
    [[1, 2, 3]],
    // input 2
    [[4, 5, 6]],
    // ...
  ];
}
