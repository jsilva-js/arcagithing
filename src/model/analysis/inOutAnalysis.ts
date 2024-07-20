import { AnalysisManager } from ".";
import { Grid } from "../grid";
import { PrivateBodyPattern } from "./grid/private/pattern";

export class InputOutputAnalysis extends AnalysisManager<Grid> {
  gatherInputOutputConstraints() {
    const inputs = this.getGridsByNatureAndType("train", "input");
    const outputs = this.getGridsByNatureAndType("train", "output");
    return this.getInputsPrivates(inputs)[1];
  }
}
