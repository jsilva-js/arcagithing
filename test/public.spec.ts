import { Grid } from "../src/types";
import { Grid as GridModel } from "../src/model/grid";

// 009d5c81
const gridData: Grid = [
  [1, 0, 0, 0, 0, 0, 5],
  [0, 3, 3, 3, 3, 3, 0],
  [0, 3, 1, 1, 1, 3, 0],
  [0, 3, 1, 1, 1, 3, 0],
  [0, 3, 1, 1, 1, 3, 0],
  [0, 3, 3, 3, 3, 1, 0],
  [4, 0, 0, 0, 0, 0, 1],
];

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      const result = new GridModel(gridData);
      console.log(result.fields?.groups[0]);
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
