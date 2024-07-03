import { AnalysisManager } from ".";
import { Grid } from "../grid";
import { PrivateBodyPattern } from "./grid/privateBody/pattern";

export class InputOutputAnalysis extends AnalysisManager<Grid> {
  privateBodyPattern: PrivateBodyPattern = new PrivateBodyPattern();

  gatherInputOutputConstraints() {
    const output = AnalysisManager.privateAnalysis.output;
    const input = AnalysisManager.privateAnalysis.input;

    const privateBodyPattern =
      this.privateBodyPattern.getColorAndLengthPrivateBodyPattern(
        input,
        output
      );

    return privateBodyPattern;
  }
}
