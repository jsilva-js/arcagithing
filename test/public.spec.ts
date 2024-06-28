import { Grid } from "../src/types";
import { Grid as GridModel } from "../src/model/grid/";
import { getGridObjects, groups } from "../src/utils/groups";
import { classifyIslands } from "../src/utils/fieldsData/classifyAreas";
import { Body } from "../src/model/grid/body";

// 009d5c81
const gridData: Grid = [
  [0, 0, 1, 8, 1, 1, 1, 0],
  [1, 5, 1, 7, 1, 1, 0, 0],
  [0, 8, 0, 7, 7, 7, 8, 8],
  [0, 8, 8, 0, 0, 0, 8, 0],
  [0, 7, 0, 0, 8, 5, 5, 0],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 8, 7, 7, 8, 0, 0],
  [0, 0, 8, 7, 7, 0, 8, 8],
  [0, 8, 8, 0, 8, 0, 8, 8],
];

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      const result = new GridModel(gridData);
      console.log(result.children);
      // try {
      //   const result = getGridObjects(gridData, groups.private_body);
      //   console.log(result);

      //   const r = classifyIslands(result);
      //   console.log(r);
      // } catch (error) {
      //   console.log(error);
      // }
    });
  });
});
