import { Grid as GridData } from "../../types";
import { Grid, GridNature, GridOutput, TestOutput, TrainOutput } from "../grid";
import { GridManager } from "./gridManager";

export class Output extends GridManager<GridOutput> {
  addOutput(data: GridData, purpose: GridNature): GridOutput {
    const grid = new Grid(data, "output", purpose) as GridOutput;
    this.addGrid(grid);
    return grid;
  }

  getTrainOutputs(): TrainOutput[] {
    return this.getGridsByPurposeAndType("train", "output") as TrainOutput[];
  }

  getTestOutputs(): TestOutput[] {
    return this.getGridsByPurposeAndType("test", "output") as TestOutput[];
  }
}
