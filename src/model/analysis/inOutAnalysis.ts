import { AnalysisManager } from ".";
import { Grid as GridData } from "../../types";
import { Grid, GridInput, GridOutput } from "../grid";
import { Pattern } from "./pattern";

export class InputOutputAnalysis extends AnalysisManager<Grid> {
  gatherInputOutputConstraints() {
    const inputs = this.getGridsByNatureAndType("train", "input");
    const outputs = this.getGridsByNatureAndType("train", "output");

    const inStats = this.getConstraints(inputs, "input");
    const outStats = this.getConstraints(outputs, "output");

    console.log(inStats, outStats);
    return;
  }
}

export class InputOutputPattern extends Pattern {
  constructor() {
    super();
  }
}
