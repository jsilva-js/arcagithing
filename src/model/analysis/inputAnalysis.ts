import { AnalysisManager } from ".";
import { Grid as GridData } from "../../types";
import { GridInput } from "../grid";
import { Pattern } from "./pattern";

export class InputAnalysis extends AnalysisManager<GridInput> {
  gatherInputConstraints() {
    const inputs = this.getGridsByNatureAndType("train", "input");
    const sizes = this.getGridSizes(inputs);
    // 1. grid sizes
    // 2. public bodies
    return sizes;
  }
}

export class InputPattern extends Pattern {
  constructor() {
    super();
  }
}
