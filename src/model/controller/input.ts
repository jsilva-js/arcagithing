import { Grid as GridData } from "../../types";
import { Grid, GridInput, GridNature, TestInput, TrainInput } from "../grid";
import { GridManager } from "./gridManager";

export class Input extends GridManager<GridInput> {
  addInput(data: GridData, purpose: GridNature): GridInput {
    const grid = new Grid(data, "input", purpose) as GridInput;
    this.addGrid(grid);
    return grid;
  }

  getTrainInputs(): TrainInput[] {
    return this.getGridsByPurposeAndType("train", "input") as TrainInput[];
  }

  getTestInputs(): TestInput[] {
    return this.getGridsByPurposeAndType("test", "input") as TestInput[];
  }
}
