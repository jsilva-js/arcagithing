import { AnalysisManager } from ".";
import { Grid as GridData } from "../../types";
import { GridOutput } from "../grid";
import { Pattern } from "./pattern";

export class OutputAnalysis extends AnalysisManager<GridOutput> {
  gatherOutputConstraints() {
    const outputs = this.getGridsByNatureAndType("train", "output");
    return this.getConstraints(outputs);
  }
}

export class OutputPattern extends Pattern {
  constructor() {
    super();
  }
}
