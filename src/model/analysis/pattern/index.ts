import {
  AreaData,
  AreaDataWithMirroredOutput,
  Difference,
  GridTypes,
  StatObject,
  StatProp,
} from "../../../types";
import { IDManager } from "../../grid/core";

export class Pattern {
  public properties: Record<string, any> = {};

  addProperty(key: string, value: any) {
    this.properties[key] = value;
  }
}

export class CrossCheckPattern extends Pattern {
  constructor() {
    super();
    // this.mergeProperties();
  }

  findCommonChanges(
    differences: {
      color: Difference;
      length: Difference;
      colorLength: Difference;
    }[]
  ) {
    const commonChanges = {
      color: {
        removed: {},
        added: {},
        changed: {},
      },
      length: {
        removed: {},
        added: {},
        changed: {},
      },
      colorLength: {
        removed: {},
        added: {},
        changed: {},
      },
    };

    const keys = ["removed", "added", "changed"] as const;
    keys.forEach((key) => {
      const commonColor = this.findCommonInKey(
        differences.map((d) => d.color[key])
      );
      const commonLength = this.findCommonInKey(
        differences.map((d) => d.length[key])
      );
      const commonColorLength = this.findCommonInKey(
        differences.map((d) => d.colorLength[key])
      );

      commonChanges.color[key] = commonColor;
      commonChanges.length[key] = commonLength;
      commonChanges.colorLength[key] = commonColorLength;
    });

    return commonChanges;
  }

  public findCommonInKey(objectsArray: { [key: string]: any }[]) {
    if (objectsArray.length === 0) return {};

    const firstObjectKeys = Object.keys(objectsArray[0]);
    return firstObjectKeys.reduce((common, key) => {
      if (objectsArray.every((obj) => key in obj)) {
        common[key] = objectsArray[0][key];
      }
      return common;
    }, {} as { [key: string]: any });
  }

  public compareGrids(
    inputStat: StatObject,
    outputStat: StatObject,
    compareType?: GridTypes // Add parameter to specify comparison type
  ): Difference {
    const differences: Difference = {
      removed: {},
      added: {},
      changed: {},
    };

    // Identify removed and changed items
    for (const key in inputStat) {
      if (!outputStat.hasOwnProperty(key)) {
        if (compareType === "input") {
          differences.removed[key] = inputStat[key];
        }
      } else {
        const inputCount = inputStat[key].length;
        const outputCount = outputStat[key].length;
        const inputItems = inputStat[key].items;
        const outputItems = outputStat[key].items;

        if (
          inputCount !== outputCount ||
          !this.areItemsEqual(inputItems, outputItems)
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
        if (compareType === "output") {
          differences.added[key] = outputStat[key];
        }
      }
    }

    return differences;
  }

  private areItemsEqual(
    inputItems: { id: string; area: AreaDataWithMirroredOutput | AreaData }[],
    outputItems: { id: string; area: AreaDataWithMirroredOutput | AreaData }[]
  ): boolean {
    if (inputItems.length !== outputItems.length) {
      return false;
    }

    for (let i = 0; i < inputItems.length; i++) {
      const inputInstance = inputItems[i];
      const outputInstance = outputItems[i];

      if (!inputInstance || !outputInstance) {
        return false;
      }

      const inputArea = inputInstance.area;
      const outputArea = outputInstance.area;

      if (inputArea.length !== outputArea.length) {
        return false;
      }

      for (let j = 0; j < inputArea.length; j++) {
        if (inputArea[j][2] !== outputArea[j][5]) {
          return false;
        }
      }
    }

    return true;
  }
}
