import { Sample } from "../src/model/controller";
import { EachMonad, GridMonad } from "./monad";

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      try {
        const sampl = new Sample("0bb8deee");
        sample4["0bb8deee"].train.forEach((train) => {
          sampl.addTrain(train.input, train.output);
        });

        const inputStats = sampl.analyzeInputOutputConstraints();

        console.dir(inputStats, { depth: null, colors: true });
        // for (let i = 0; i < inputStats.length; i++) {
        // }
        // console.log(inputStats[0].colorLength);
      } catch (e) {
        console.log(e);
      }
    });
  });
});

const sample2 = {
  "13713586": {
    test: [
      {
        input: [
          [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
    ],
    train: [
      {
        input: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        ],
        output: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 3, 3, 3, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 3, 3, 3, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 3, 3, 3, 4, 0, 0, 0, 0],
          [8, 8, 8, 8, 0, 0, 4, 3, 3, 3, 4, 0, 0, 0, 0],
          [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        ],
      },
      {
        input: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 7, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        ],
        output: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
          [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
          [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
          [0, 0, 7, 7, 7, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
          [0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5],
          [0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5],
          [0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        ],
      },
      {
        input: [
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        output: [
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
          [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 0, 0, 0],
          [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 0, 0, 0],
          [5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
          [5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
          [5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
          [5, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
          [5, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
          [5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
    ],
  },
};

const sample3 = {
  "14754a24": {
    test: [
      {
        input: [
          [0, 0, 5, 0, 0, 5, 5, 0, 5, 0, 5, 0, 5, 5, 4, 5, 0, 0, 5],
          [0, 5, 5, 0, 5, 4, 5, 5, 5, 0, 5, 5, 0, 4, 5, 0, 5, 5, 0],
          [5, 5, 5, 0, 5, 5, 4, 0, 5, 5, 0, 5, 5, 5, 5, 0, 5, 0, 5],
          [5, 5, 4, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 5, 0, 0, 0, 5, 5],
          [5, 4, 5, 5, 5, 5, 0, 5, 0, 0, 5, 5, 0, 5, 5, 0, 5, 0, 0],
          [5, 5, 0, 5, 0, 0, 0, 5, 5, 0, 5, 4, 5, 0, 0, 5, 0, 5, 5],
          [0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 4, 4, 5, 0, 5, 5, 0, 0, 0],
          [5, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 5, 0, 5, 5, 0, 0, 5, 0],
          [0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 5, 0, 5, 0, 5],
          [0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 5, 0, 0, 5, 0, 0, 5, 5, 0],
          [0, 0, 0, 0, 5, 5, 0, 5, 0, 5, 0, 5, 0, 4, 0, 0, 0, 5, 0],
          [5, 5, 4, 5, 5, 5, 5, 5, 0, 0, 5, 0, 4, 5, 4, 0, 5, 0, 5],
          [5, 5, 5, 4, 0, 0, 0, 5, 5, 5, 0, 5, 5, 4, 0, 5, 5, 5, 5],
          [0, 0, 4, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 5, 5, 5, 5, 5, 5],
          [5, 0, 5, 0, 0, 5, 0, 4, 5, 0, 0, 5, 5, 5, 5, 5, 0, 0, 5],
          [5, 5, 0, 5, 5, 0, 5, 5, 4, 0, 0, 5, 5, 5, 0, 5, 0, 5, 5],
          [5, 5, 5, 0, 5, 5, 5, 4, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0],
          [5, 5, 5, 5, 0, 0, 0, 5, 0, 0, 5, 0, 5, 0, 5, 0, 5, 0, 0],
          [0, 5, 0, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5],
        ],
      },
    ],
    train: [
      {
        input: [
          [0, 5, 0, 5, 5, 0, 5, 5, 5, 0, 0, 0, 5, 0, 0, 5, 0, 5, 0],
          [0, 0, 0, 5, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0],
          [0, 5, 5, 0, 0, 0, 5, 0, 5, 5, 0, 0, 0, 0, 5, 0, 0, 5, 0],
          [0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 5, 0, 5, 0, 5, 0, 0],
          [0, 0, 5, 0, 0, 4, 0, 5, 0, 5, 0, 5, 0, 0, 0, 5, 5, 0, 5],
          [0, 0, 5, 0, 4, 5, 4, 5, 5, 0, 5, 0, 0, 0, 5, 4, 5, 5, 5],
          [5, 0, 0, 0, 0, 4, 0, 0, 5, 5, 0, 0, 0, 0, 5, 4, 4, 5, 0],
          [5, 0, 5, 5, 5, 5, 0, 5, 0, 0, 0, 5, 0, 5, 0, 4, 5, 0, 0],
          [5, 5, 0, 0, 5, 0, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 0],
          [5, 5, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0],
          [0, 0, 5, 5, 0, 0, 0, 0, 5, 4, 5, 0, 5, 5, 0, 0, 0, 0, 0],
          [5, 5, 5, 4, 0, 5, 0, 5, 5, 4, 4, 5, 0, 0, 5, 5, 5, 5, 0],
          [0, 0, 4, 5, 0, 0, 5, 5, 0, 4, 5, 0, 5, 0, 0, 5, 5, 5, 5],
          [0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5, 5],
          [5, 5, 0, 5, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0],
          [5, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5],
          [5, 0, 5, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0],
          [0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
        ],
        output: [
          [0, 5, 0, 5, 5, 0, 5, 5, 5, 0, 0, 0, 5, 0, 0, 5, 0, 5, 0],
          [0, 0, 0, 5, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0],
          [0, 5, 5, 0, 0, 0, 5, 0, 5, 5, 0, 0, 0, 0, 5, 0, 0, 5, 0],
          [0, 0, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 5, 0, 5, 0, 5, 0, 0],
          [0, 0, 5, 0, 0, 4, 0, 5, 0, 5, 0, 5, 0, 0, 0, 5, 5, 0, 5],
          [0, 0, 5, 0, 4, 2, 4, 5, 5, 0, 5, 0, 0, 0, 5, 4, 5, 5, 5],
          [5, 0, 0, 0, 0, 4, 0, 0, 5, 5, 0, 0, 0, 0, 2, 4, 4, 5, 0],
          [5, 0, 5, 5, 5, 5, 0, 5, 0, 0, 0, 5, 0, 5, 0, 4, 5, 0, 0],
          [5, 5, 0, 0, 5, 0, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 0],
          [5, 5, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0],
          [0, 0, 2, 5, 0, 0, 0, 0, 5, 4, 5, 0, 5, 5, 0, 0, 0, 0, 0],
          [5, 2, 2, 4, 0, 5, 0, 5, 2, 4, 4, 5, 0, 0, 5, 5, 5, 5, 0],
          [0, 0, 4, 5, 0, 0, 5, 5, 0, 4, 5, 0, 5, 0, 0, 5, 5, 5, 5],
          [0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5, 5],
          [5, 5, 0, 5, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0],
          [5, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5],
          [5, 0, 5, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0],
          [0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
        ],
      },
      {
        input: [
          [0, 5, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 5, 0, 0, 5],
          [5, 5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5, 5, 5, 0, 0],
          [0, 0, 4, 5, 0, 5, 0, 5, 5, 0, 0, 4, 5, 5, 5, 0],
          [0, 5, 5, 4, 0, 0, 5, 0, 0, 5, 0, 0, 4, 0, 0, 5],
          [0, 0, 4, 5, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 5, 0],
          [0, 0, 0, 5, 0, 5, 5, 5, 5, 0, 5, 0, 5, 5, 0, 5],
          [5, 0, 5, 0, 0, 4, 5, 4, 5, 5, 5, 5, 0, 5, 0, 0],
          [0, 0, 0, 0, 5, 5, 4, 5, 5, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 5, 4, 5, 0],
          [0, 0, 5, 0, 0, 5, 0, 0, 0, 5, 5, 0, 5, 5, 4, 5],
          [5, 0, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5],
          [5, 5, 4, 5, 4, 5, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5],
          [5, 0, 0, 5, 5, 5, 0, 5, 4, 5, 4, 0, 5, 0, 0, 0],
          [5, 0, 0, 5, 5, 0, 0, 5, 0, 4, 0, 0, 0, 5, 5, 0],
          [5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 0, 5, 5, 0, 0],
          [5, 5, 5, 5, 0, 0, 0, 0, 5, 0, 5, 5, 5, 5, 0, 5],
          [5, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 5, 5, 0, 0],
          [5, 0, 0, 0, 0, 5, 0, 0, 5, 5, 5, 5, 0, 0, 0, 5],
        ],
        output: [
          [0, 5, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 5, 0, 0, 5],
          [5, 5, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5, 2, 5, 0, 0],
          [0, 0, 4, 5, 0, 5, 0, 5, 5, 0, 0, 4, 2, 2, 5, 0],
          [0, 2, 2, 4, 0, 0, 5, 0, 0, 5, 0, 0, 4, 0, 0, 5],
          [0, 0, 4, 5, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 5, 0],
          [0, 0, 0, 5, 0, 5, 2, 5, 5, 0, 5, 0, 5, 5, 0, 5],
          [5, 0, 5, 0, 0, 4, 2, 4, 5, 5, 5, 5, 0, 5, 0, 0],
          [0, 0, 0, 0, 5, 5, 4, 5, 5, 0, 0, 0, 0, 0, 0, 5],
          [0, 0, 5, 5, 0, 0, 5, 0, 5, 5, 0, 5, 5, 4, 5, 0],
          [0, 0, 5, 0, 0, 5, 0, 0, 0, 5, 5, 0, 2, 2, 4, 5],
          [5, 0, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 2, 5, 5],
          [5, 5, 4, 2, 4, 5, 0, 5, 5, 2, 0, 0, 0, 0, 5, 5],
          [5, 0, 0, 2, 5, 5, 0, 5, 4, 2, 4, 0, 5, 0, 0, 0],
          [5, 0, 0, 5, 5, 0, 0, 5, 0, 4, 0, 0, 0, 5, 5, 0],
          [5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 0, 5, 5, 0, 0],
          [5, 5, 5, 5, 0, 0, 0, 0, 5, 0, 5, 5, 5, 5, 0, 5],
          [5, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 5, 5, 0, 0],
          [5, 0, 0, 0, 0, 5, 0, 0, 5, 5, 5, 5, 0, 0, 0, 5],
        ],
      },
      {
        input: [
          [0, 5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
          [0, 0, 4, 0, 0, 5, 5, 4, 5, 0, 0, 5, 0, 5, 5],
          [5, 0, 5, 0, 0, 0, 4, 4, 5, 0, 5, 5, 5, 0, 5],
          [5, 0, 0, 5, 0, 5, 5, 4, 0, 0, 0, 5, 5, 0, 5],
          [5, 5, 0, 5, 0, 5, 0, 0, 0, 5, 5, 0, 0, 5, 0],
          [0, 5, 0, 0, 5, 0, 5, 5, 0, 0, 5, 5, 5, 0, 0],
          [5, 5, 0, 5, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
          [5, 5, 4, 0, 5, 0, 5, 0, 0, 5, 0, 5, 0, 5, 5],
          [5, 4, 5, 4, 0, 5, 5, 0, 4, 5, 4, 5, 0, 5, 0],
          [5, 5, 5, 0, 0, 5, 5, 0, 0, 4, 0, 5, 0, 5, 5],
          [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5],
          [0, 5, 0, 0, 5, 0, 5, 0, 0, 5, 5, 0, 5, 0, 0],
          [0, 0, 0, 0, 0, 5, 0, 5, 5, 0, 0, 0, 0, 0, 5],
          [0, 5, 0, 0, 5, 5, 5, 5, 0, 5, 0, 5, 0, 0, 0],
        ],
        output: [
          [0, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
          [0, 0, 4, 0, 0, 5, 5, 4, 5, 0, 0, 5, 0, 5, 5],
          [5, 0, 5, 0, 0, 0, 4, 4, 2, 0, 5, 5, 5, 0, 5],
          [5, 0, 0, 5, 0, 5, 5, 4, 0, 0, 0, 5, 5, 0, 5],
          [5, 5, 0, 5, 0, 5, 0, 0, 0, 5, 5, 0, 0, 5, 0],
          [0, 5, 0, 0, 5, 0, 5, 5, 0, 0, 5, 5, 5, 0, 0],
          [5, 5, 0, 5, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
          [5, 5, 4, 0, 5, 0, 5, 0, 0, 2, 0, 5, 0, 5, 5],
          [5, 4, 2, 4, 0, 5, 5, 0, 4, 2, 4, 5, 0, 5, 0],
          [5, 5, 2, 0, 0, 5, 5, 0, 0, 4, 0, 5, 0, 5, 5],
          [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5],
          [0, 5, 0, 0, 5, 0, 5, 0, 0, 5, 5, 0, 5, 0, 0],
          [0, 0, 0, 0, 0, 5, 0, 5, 5, 0, 0, 0, 0, 0, 5],
          [0, 5, 0, 0, 5, 5, 5, 5, 0, 5, 0, 5, 0, 0, 0],
        ],
      },
      {
        input: [
          [0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0],
          [0, 5, 0, 0, 0, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5],
          [0, 0, 5, 0, 0, 0, 5, 5, 0, 5, 0, 0, 5, 5, 5],
          [5, 5, 5, 4, 5, 0, 0, 0, 4, 4, 5, 0, 5, 0, 5],
          [0, 5, 4, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5],
          [5, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5],
          [0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5],
          [5, 5, 0, 0, 5, 5, 0, 5, 0, 5, 5, 0, 0, 0, 0],
          [5, 0, 5, 0, 0, 5, 5, 5, 4, 5, 0, 0, 0, 5, 0],
          [0, 4, 5, 5, 0, 0, 5, 4, 5, 5, 5, 5, 0, 0, 0],
          [0, 5, 4, 5, 0, 5, 5, 5, 0, 0, 0, 0, 5, 0, 5],
          [0, 0, 5, 0, 0, 0, 5, 5, 0, 0, 5, 0, 5, 0, 0],
          [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 5, 5],
          [0, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 5, 0, 5, 0],
        ],
        output: [
          [0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0],
          [0, 5, 0, 0, 0, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5],
          [0, 0, 2, 0, 0, 0, 5, 5, 0, 2, 0, 0, 5, 5, 5],
          [5, 2, 2, 4, 5, 0, 0, 0, 4, 4, 2, 0, 5, 0, 5],
          [0, 5, 4, 5, 0, 0, 0, 0, 0, 2, 0, 5, 0, 0, 5],
          [5, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5],
          [0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5],
          [5, 5, 0, 0, 5, 5, 0, 2, 0, 5, 5, 0, 0, 0, 0],
          [5, 0, 2, 0, 0, 5, 2, 2, 4, 5, 0, 0, 0, 5, 0],
          [0, 4, 2, 2, 0, 0, 5, 4, 5, 5, 5, 5, 0, 0, 0],
          [0, 5, 4, 5, 0, 5, 5, 5, 0, 0, 0, 0, 5, 0, 5],
          [0, 0, 5, 0, 0, 0, 5, 5, 0, 0, 5, 0, 5, 0, 0],
          [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 5, 5],
          [0, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 5, 0, 5, 0],
        ],
      },
    ],
  },
};

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

const sample4 = {
  "0bb8deee": {
    test: [
      {
        input: [
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 3, 3, 0],
          [0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 3, 3, 0],
          [0, 0, 2, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0],
          [0, 2, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0],
          [0, 0, 6, 6, 0, 0, 1, 0, 0, 4, 0, 4, 0],
          [0, 6, 0, 6, 0, 0, 1, 0, 0, 0, 4, 0, 0],
          [0, 6, 6, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        ],
      },
    ],
    train: [
      {
        input: [
          [0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 3, 3],
          [0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 3, 3, 0],
          [0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 3, 0],
          [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
          [0, 0, 4, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
          [0, 4, 0, 4, 0, 0, 0, 2, 0, 5, 5, 0, 0],
          [0, 0, 4, 0, 0, 0, 0, 2, 0, 0, 5, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5, 0],
          [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        ],
        output: [
          [1, 1, 0, 0, 3, 3],
          [0, 1, 0, 3, 3, 0],
          [0, 1, 1, 0, 3, 0],
          [0, 4, 0, 5, 5, 0],
          [4, 0, 4, 0, 5, 0],
          [0, 4, 0, 0, 0, 5],
        ],
      },
      {
        input: [
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 3, 3, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0],
          [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [5, 5, 5, 0, 1, 0, 0, 8, 0, 8, 0, 0, 0],
          [0, 5, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 0, 0, 8, 0, 0, 0, 0, 0],
        ],
        output: [
          [0, 2, 2, 3, 0, 0],
          [2, 2, 2, 0, 3, 3],
          [0, 2, 0, 0, 3, 0],
          [0, 0, 5, 8, 0, 8],
          [5, 5, 5, 0, 8, 0],
          [0, 5, 0, 8, 0, 0],
        ],
      },
      {
        input: [
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1, 0],
          [0, 0, 2, 2, 0, 0, 3, 0, 1, 0, 0, 0],
          [0, 2, 0, 2, 0, 0, 3, 0, 0, 1, 0, 0],
          [0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 5, 0],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 5],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 5, 5, 5],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [4, 4, 4, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
        ],
        output: [
          [0, 2, 2, 0, 1, 1],
          [2, 0, 2, 1, 0, 0],
          [0, 2, 0, 0, 1, 0],
          [4, 0, 0, 0, 5, 0],
          [4, 4, 4, 5, 0, 5],
          [0, 4, 0, 5, 5, 5],
        ],
      },
    ],
  },
};
