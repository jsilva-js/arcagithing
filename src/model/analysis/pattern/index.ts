import { StatObject, StatProp } from "../../../types";
import { IDManager } from "../../grid/core";

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

export class Pattern {
  public properties: Record<string, any> = {};

  addProperty(key: string, value: any) {
    this.properties[key] = value;
  }
}
export class CrossCheckPattern extends Pattern {
  // constructor() {
  //   super();
  //   // this.mergeProperties();
  // }
  // findCommonChanges(
  //   differences: {
  //     color: Difference;
  //     length: Difference;
  //     colorLength: Difference;
  //   }[]
  // ) {
  //   const commonChanges = {
  //     color: {
  //       removed: {},
  //       added: {},
  //       changed: {},
  //     },
  //     length: {
  //       removed: {},
  //       added: {},
  //       changed: {},
  //     },
  //     colorLength: {
  //       removed: {},
  //       added: {},
  //       changed: {},
  //     },
  //   };
  //   const keys = ["removed", "added", "changed"] as const;
  //   keys.forEach((key) => {
  //     const commonColor = this.findCommonInKey(
  //       differences.map((d) => d.color[key])
  //     );
  //     const commonLength = this.findCommonInKey(
  //       differences.map((d) => d.length[key])
  //     );
  //     const commonColorLength = this.findCommonInKey(
  //       differences.map((d) => d.colorLength[key])
  //     );
  //     commonChanges.color[key] = commonColor;
  //     commonChanges.length[key] = commonLength;
  //     commonChanges.colorLength[key] = commonColorLength;
  //   });
  //   return commonChanges;
  // }
  // public findCommonInKey(objectsArray: { [key: string]: any }[]) {
  //   if (objectsArray.length === 0) return {};
  //   const firstObjectKeys = Object.keys(objectsArray[0]);
  //   return firstObjectKeys.reduce((common, key) => {
  //     if (objectsArray.every((obj) => key in obj)) {
  //       common[key] = objectsArray[0][key];
  //     }
  //     return common;
  //   }, {} as { [key: string]: any });
  // }
  // public compareGrids(
  //   inputStat: StatObject,
  //   outputStat: StatObject
  // ): Difference {
  //   const differences: Difference = {
  //     removed: {},
  //     added: {},
  //     changed: {},
  //   };
  //   const allInstances = IDManager.getAllInstances();
  //   // Identify removed and changed items
  //   for (const key in inputStat) {
  //     if (!outputStat.hasOwnProperty(key)) {
  //       differences.removed[key] = inputStat[key];
  //     } else {
  //       const inputCount = inputStat[key].length;
  //       const outputCount = outputStat[key].length;
  //       const inputItems = inputStat[key].items;
  //       const outputItems = outputStat[key].items;
  //       if (
  //         inputCount !== outputCount ||
  //         !this.areItemsEqual(inputItems, outputItems, allInstances)
  //       ) {
  //         differences.changed[key] = {
  //           input: inputStat[key],
  //           output: outputStat[key],
  //         };
  //       }
  //     }
  //   }
  //   // Identify added items
  //   for (const key in outputStat) {
  //     if (!inputStat.hasOwnProperty(key)) {
  //       differences.added[key] = outputStat[key];
  //     }
  //   }
  //   return differences;
  // }
  // private areItemsEqual(
  //   inputItems: string[],
  //   outputItems: string[],
  //   allInstances: Map<string, any>
  // ): boolean {
  //   if (inputItems.length !== outputItems.length) {
  //     return false;
  //   }
  //   const sortedInputItems = [...inputItems].sort();
  //   const sortedOutputItems = [...outputItems].sort();
  //   for (let i = 0; i < sortedInputItems.length; i++) {
  //     const inputInstance = allInstances.get(sortedInputItems[i]);
  //     const outputInstance = allInstances.get(sortedOutputItems[i]);
  //     if (!inputInstance || !outputInstance) {
  //       return false;
  //     }
  //     if (
  //       JSON.stringify(inputInstance.area) !==
  //       JSON.stringify(outputInstance.area)
  //     ) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}
