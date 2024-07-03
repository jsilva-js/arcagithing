import { Grid } from "../src/types";
import { Grid as GridModel } from "../src/model/grid/";
import { getGridObjects, groups } from "../src/utils/groups";
import { classifyIslands } from "../src/utils/fieldsData/classifyAreas";
import { Body } from "../src/model/grid/body";
import { Sample } from "../src/model/controller";
import { InputAnalysis } from "../src/model/analysis/inputAnalysis";
import { AnalysisManager } from "../src/model/analysis";

// 009d5c81
const sample = {
  "12eac192": {
    test: [
      {
        input: [
          [0, 5, 0, 1, 5, 5, 0, 5],
          [1, 1, 0, 0, 0, 1, 1, 0],
          [0, 7, 7, 0, 0, 0, 0, 5],
          [1, 1, 0, 5, 0, 1, 0, 0],
          [0, 1, 0, 5, 5, 5, 0, 1],
          [0, 7, 0, 0, 7, 0, 0, 7],
          [1, 0, 1, 0, 0, 0, 1, 7],
          [0, 0, 1, 1, 0, 1, 0, 7],
        ],
      },
    ],
    train: [
      {
        input: [
          [0, 0, 1, 0, 7, 7, 7, 0],
          [8, 8, 0, 0, 5, 5, 0, 0],
          [0, 8, 8, 0, 0, 5, 5, 0],
          [0, 1, 1, 0, 8, 0, 0, 1],
          [0, 7, 0, 1, 8, 0, 0, 0],
          [8, 0, 0, 0, 1, 0, 7, 0],
          [0, 8, 8, 8, 1, 0, 0, 0],
        ],
        output: [
          [0, 0, 3, 0, 7, 7, 7, 0],
          [8, 8, 0, 0, 5, 5, 0, 0],
          [0, 8, 8, 0, 0, 5, 5, 0],
          [0, 3, 3, 0, 3, 0, 0, 3],
          [0, 3, 0, 3, 3, 0, 0, 0],
          [3, 0, 0, 0, 3, 0, 3, 0],
          [0, 8, 8, 8, 3, 0, 0, 0],
        ],
      },
      {
        input: [
          [0, 0, 1, 8, 1, 1, 1, 0],
          [1, 5, 1, 7, 1, 1, 0, 0],
          [0, 8, 0, 7, 7, 7, 8, 8],
          [0, 8, 8, 0, 0, 0, 8, 0],
          [0, 7, 0, 0, 8, 5, 5, 0],
          [1, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 8, 7, 7, 8, 0, 0],
          [0, 0, 8, 7, 7, 0, 8, 8],
          [0, 8, 8, 0, 8, 0, 8, 8],
        ],
        output: [
          [0, 0, 3, 3, 1, 1, 1, 0],
          [3, 3, 3, 7, 1, 1, 0, 0],
          [0, 8, 0, 7, 7, 7, 8, 8],
          [0, 8, 8, 0, 0, 0, 8, 0],
          [0, 3, 0, 0, 3, 3, 3, 0],
          [3, 0, 0, 0, 0, 0, 0, 3],
          [3, 0, 8, 7, 7, 3, 0, 0],
          [0, 0, 8, 7, 7, 0, 8, 8],
          [0, 8, 8, 0, 3, 0, 8, 8],
        ],
      },
      {
        input: [
          [1, 7, 7, 1, 0, 8, 0, 5],
          [1, 7, 7, 1, 1, 0, 1, 0],
          [8, 8, 0, 0, 7, 7, 7, 7],
          [0, 1, 0, 0, 0, 0, 1, 1],
          [5, 0, 8, 0, 1, 0, 1, 1],
        ],
        output: [
          [3, 7, 7, 1, 0, 3, 0, 3],
          [3, 7, 7, 1, 1, 0, 3, 0],
          [3, 3, 0, 0, 7, 7, 7, 7],
          [0, 3, 0, 0, 0, 0, 1, 1],
          [3, 0, 3, 0, 3, 0, 1, 1],
        ],
      },
      {
        input: [
          [1, 0, 5],
          [1, 0, 0],
          [7, 7, 7],
        ],
        output: [
          [3, 0, 3],
          [3, 0, 0],
          [7, 7, 7],
        ],
      },
    ],
  },
};

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      try {
        const sampl = new Sample("12eac192");
        sample["12eac192"].train.forEach((train) => {
          sampl.addTrain(train.input, train.output);
        });

        const inputStats = sampl.analyzeInputConstraints()[0];
        console.log(inputStats);
      } catch (e) {
        console.log(e);
      }
    });
  });
});
