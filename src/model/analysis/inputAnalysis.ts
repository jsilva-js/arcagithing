import { AnalysisManager } from ".";
import { Grid as GridData } from "../../types";
import { GridInput } from "../grid";
import { Pattern } from "./pattern";

export class InputAnalysis extends AnalysisManager<GridInput> {
  inputReport() {
    const inputs = this.getGridsByNatureAndType("train", "input");

    this.inputPrivateReport(inputs);

    return;
  }

  inputPrivateReport(inputs: GridInput[]) {
    const privatesByGrid = this.collectPrivates(inputs);

    privatesByGrid.forEach((privates, grid) => {
      console.log(grid);
      console.log(privates);
    });
  }

  collectPrivates(inputs: GridInput[]) {
    return this.getPrivates(inputs);
  }
}

export class InputPattern extends Pattern {
  constructor() {
    super();
  }
}
