import { Grid as GridData } from "../../types";
import { Grid, GridNature, GridOutput, TestOutput, TrainOutput } from "../grid";
import { GridManager } from "./gridManager";

export class Output extends GridManager<GridOutput> {
  addOutput(data: GridData, nature: GridNature): GridOutput {
    return this.addGrid(data, "output", nature);
  }

  getTrainOutputs(): GridOutput[] {
    return this.getGridsByNatureAndType("train", "output");
  }

  getTestOutputs(): GridOutput[] {
    return this.getGridsByNatureAndType("test", "output");
  }
}
