import { AnalysisManager } from ".";
import { Grid } from "../grid";
import { PrivateBodyPattern } from "./grid/private/pattern";

export class InputOutputAnalysis extends AnalysisManager<Grid> {
  gatherInputOutputConstraints() {
    const outputs = this.getGridsByNatureAndType("train", "output");
  }
}
