import { AnalysisManager } from "../..";
import { GridGroupTypes, GridTypes, StatProps } from "../../../../types";
import { CrossCheckPattern } from "../../pattern";

export class PrivateBodyPattern extends CrossCheckPattern {
  inputs: StatProps[] = AnalysisManager.privateAnalysis.input;
  outputs: StatProps[] = AnalysisManager.privateAnalysis.output;
  getDifferencesFromStats(gridType?: GridTypes) {
    const differences = this.inputs.map((input, i) => {
      const out = this.outputs[i];
      return this.compareInOutStatProps(input, out, gridType);
    });
    return differences;
  }
  compareInOutStatProps(
    inGrid: StatProps,
    outGrid: StatProps,
    gridType?: GridTypes
  ) {
    return {
      color: this.compareGridsByColor(inGrid, outGrid, gridType),
      length: this.compareGridsByLength(inGrid, outGrid, gridType),
      colorLength: this.compareGridsByColorLength(inGrid, outGrid, gridType),
    };
  }
  compareGridsByColor(
    inGrid: StatProps,
    outGrid: StatProps,
    gridType?: GridTypes
  ) {
    return this.compareGrids(inGrid.color, outGrid.color, gridType);
  }
  compareGridsByLength(
    inGrid: StatProps,
    outGrid: StatProps,
    gridType?: GridTypes
  ) {
    return this.compareGrids(inGrid.length, outGrid.length, gridType);
  }
  compareGridsByColorLength(
    inGrid: StatProps,
    outGrid: StatProps,
    gridType?: GridTypes
  ) {
    return this.compareGrids(inGrid.colorLength, outGrid.colorLength, gridType);
  }
}
