import { Grid } from "../src/types";
import { Grid as GridModel } from "../src/model/grid";
import { getGridObjects, groups } from "../src/utils/groups";
import { classifyIslands } from "../src/utils/fieldsData/classifyAreas";

// 009d5c81
const gridData: Grid = [
  [3, 0, 2, 0, 0, 0, 0],
  [0, 3, 2, 3, 3, 3, 0],
  [0, 3, 3, 3, 1, 3, 0],
  [0, 3, 3, 1, 3, 3, 0],
  [0, 3, 1, 3, 4, 3, 0],
  [0, 3, 3, 4, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 1],
];

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      const result = new GridModel(gridData);
      console.log(result.fields?.groups[0]);
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
