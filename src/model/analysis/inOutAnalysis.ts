import { AnalysisManager } from ".";
import { Grid as GridData, StatObject, StatProp } from "../../types";
import { Grid, GridInput, GridOutput } from "../grid";
import { Pattern } from "./pattern";

interface Constraint {
  color: StatObject;
  length: StatObject;
}

interface Difference {
  removed: StatObject;
  added: StatObject;
  changed: {
    [key: string]: {
      input: StatProp;
      output: StatProp;
    };
  };
}

export class InputOutputAnalysis extends AnalysisManager<Grid> {
  gatherInputOutputConstraints() {
    const output = AnalysisManager.privateAnalysis.output;
    const differences = AnalysisManager.privateAnalysis.input.map(
      (input, i) => {
        const out = output[i];
        return this.compareConstraints(input, out);
      }
    );
    return differences;
  }

  private compareConstraints(
    input: Constraint,
    output: Constraint
  ): { color: Difference; length: Difference } {
    const differences = {
      color: this.compareStatObjects(input.color, output.color),
      length: this.compareStatObjects(input.length, output.length),
    };
    return differences;
  }

  private compareStatObjects(
    inputStat: StatObject,
    outputStat: StatObject
  ): Difference {
    const differences: Difference = {
      removed: {},
      added: {},
      changed: {},
    };

    // Identify removed and changed items
    for (const key in inputStat) {
      if (!outputStat.hasOwnProperty(key)) {
        differences.removed[key] = inputStat[key];
      } else {
        const inputCount = inputStat[key].length;
        const outputCount = outputStat[key].length;
        if (
          inputCount !== outputCount ||
          JSON.stringify(inputStat[key].items) !==
            JSON.stringify(outputStat[key].items)
        ) {
          differences.changed[key] = {
            input: inputStat[key],
            output: outputStat[key],
          };
        }
      }
    }

    // Identify added items
    for (const key in outputStat) {
      if (!inputStat.hasOwnProperty(key)) {
        differences.added[key] = outputStat[key];
      }
    }

    return differences;
  }
}

export class InputOutputPattern extends Pattern {
  constructor() {
    super();
  }
}
