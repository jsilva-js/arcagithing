import { GridManager } from "../controller/gridManager";
import { Grid, GridInput, GridOutput } from "../grid";

export class AnalysisManager<T extends Grid> extends GridManager<T> {
  getConstraints(grids: Grid[]): void {
    console.log({ grids });
    // Implement logic to gather constraints from grids
  }
}
