import { Grid as GridData } from "../../types";
import { Grid, GridInput, GridNature, TestInput, TrainInput } from "../grid";
import { GridManager } from "./gridManager";

export class Input extends GridManager<GridInput> {
  addInput(data: GridData, nature: GridNature): GridInput {
    return this.addGrid(data, "input", nature);
  }

  getTrainInputs(): GridInput[] {
    return this.getGridsByNatureAndType("train", "input");
  }

  getTestInputs(): GridInput[] {
    return this.getGridsByNatureAndType("test", "input");
  }
}
