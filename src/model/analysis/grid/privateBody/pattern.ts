import { AnalysisManager } from "../..";
import { StatProps } from "../../../../types";
import { CrossCheckPattern } from "../../pattern";

export class PrivateBodyPattern extends CrossCheckPattern {
  // inputs: StatProps[] = AnalysisManager.privateAnalysis.input;
  // outputs: StatProps[] = AnalysisManager.privateAnalysis.output;
  // getDifferencesFromStats() {
  //     const differences = this.inputs.map((input, i) => {
  //       const out = this.outputs[i];
  //       return this.compareInOutStatProps(input, out);
  //     });
  //     return differences;
  // }
  // compareInOutStatProps(inGrid: StatProps, outGrid: StatProps) {
  //   return {
  //     color: this.compareGridsByColor(inGrid, outGrid),
  //     length: this.compareGridsByLength(inGrid, outGrid),
  //     colorLength: this.compareGridsByColorLength(inGrid, outGrid),
  //   }
  // }
  // compareGridsByColor(inGrid: StatProps, outGrid: StatProps) {
  //   return this.compareGrids(inGrid.color, outGrid.color);
  // }
  // compareGridsByLength(inGrid: StatProps, outGrid: StatProps) {
  //   return this.compareGrids(inGrid.length, outGrid.length);
  // }
  // compareGridsByColorLength(inGrid: StatProps, outGrid: StatProps) {
  //   return this.compareGrids(inGrid.colorLength, outGrid.colorLength);
  // }
}
