import { Grid as GridData } from "../../types";
import { Grid, GridInput, GridNature, TestInput, TrainInput } from "../grid";
import { GridManager } from "./gridManager";

export class Input extends GridManager<GridInput> {
  constructor(sampleId: string) {
    super(sampleId);
  }

  addInput(data: GridData, nature: GridNature): GridInput {
    return this.addGrid(data, "input", nature);
  }
  getTrainInputs(): TrainInput[] {
    return this.getGridsByNatureAndType("train", "input") as TrainInput[];
  }

  getTestInputs(): TestInput[] {
    return this.getGridsByNatureAndType("test", "input") as TestInput[];
  }
}
