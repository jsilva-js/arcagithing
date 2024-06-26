import { Grid } from "../src/types";
import { Grid as GridModel } from "../src/model/grid";

// 009d5c81
const gridData: Grid = [
  [0, 0, 1, 2, 0],
  [0, 0, 1, 2, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 2],
  [2, 0, 1, 0, 2],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 3, 0],
];

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      const result = new GridModel(gridData);
      console.log(result);
      // try {
      //   const result = getGridObjects(gridData, groups.public);
      //   console.log(result);

      //   const r = classifyIslands(result);
      //   console.log(r.body);
      // } catch (error) {
      //   console.log(error);
      // }
    });
  });
});
