import { AnalysisManager } from ".";
import { Grid as GridData } from "../../types";
import { Grid, GridInput, GridOutput } from "../grid";
import { Pattern } from "./pattern";

export class InputOutputAnalysis extends AnalysisManager<Grid> {
  gatherInputOutputConstraints() {
    const inputs = this.getGridsByNatureAndType("train", "input");
    const outputs = this.getGridsByNatureAndType("train", "output");
    return this.getConstraints([...inputs, ...outputs]);
  }
}

export class InputOutputPattern extends Pattern {
  constructor() {
    super();
  }
}
