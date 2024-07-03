import { StatProps } from "../../../../types";
import { CrossCheckPattern } from "../../pattern";

export class PrivateBodyPattern extends CrossCheckPattern {
  getColorAndLengthPrivateBodyPattern(input: StatProps[], output: StatProps[]) {
    const differences = input.map((input, i) => {
      const out = output[i];
      return {
        color: this.compareGrids(input.color, out.color),
        length: this.compareGrids(input.length, out.length),
        colorLength: this.compareGrids(input.colorLength, out.colorLength),
      };
    });
    return this.findCommonChanges(differences);
  }
}
