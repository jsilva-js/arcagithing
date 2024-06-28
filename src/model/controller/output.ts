import { Grid as GridData } from "../../types";
import { Grid, GridNature, GridOutput, TestOutput, TrainOutput } from "../grid";
import { GridManager } from "./gridManager";

export class Output extends GridManager<GridOutput> {
  constructor(sampleId?: string) {
    if (!sampleId) {
      return;
    }
    super(sampleId);
  }

  addOutput(data: GridData, nature: GridNature): GridOutput {
    return this.addGrid(data, "input", nature);
  }

  getTrainOutputs(): TrainOutput[] {
    return this.getGridsByNatureAndType("train", "output") as TrainOutput[];
  }

  getTestOutputs(): TestOutput[] {
    return this.getGridsByNatureAndType("test", "output") as TestOutput[];
  }
}
