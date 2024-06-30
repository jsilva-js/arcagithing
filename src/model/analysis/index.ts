import { logGrid } from "../../utils/log";
import { GridManager } from "../controller/gridManager";
import { Grid, GridInput, GridOutput } from "../grid";
import { CompositeObject } from "../grid/core";
import { PrivateBody } from "./grid/privateBody";

export class AnalysisManager<T extends Grid> extends GridManager<T> {
  getConstraints(grids: Grid[]): void {
    const nodes: CompositeObject[] = [];

    grids.forEach((grid: Grid) => {
      const privateBodyAnalysis = new PrivateBody();
      privateBodyAnalysis.findAll(grid);
      nodes.push(...privateBodyAnalysis.nodes);
    });

    console.log(nodes);
  }
}
