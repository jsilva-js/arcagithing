import { AnalysisManager } from ".";
import { Grid as GridData } from "../../types";
import { GridInput } from "../grid";
import { Pattern } from "./pattern";

export class InputAnalysis extends AnalysisManager<GridInput> {
  gatherInputConstraints() {
    const inputs = this.getGridsByNatureAndType("train", "input");
    return this.getConstraints(inputs, "input");
  }
}

export class InputPattern extends Pattern {
  constructor() {
    super();
  }
}
