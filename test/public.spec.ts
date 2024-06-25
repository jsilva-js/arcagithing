import { getGridObjects, groups } from "../src/utils/groups";
import { Grid } from "../src/types";

// 009d5c81
const gridData: Grid = [
  [1, 0, 0, 1],
  [0, 2, 0, 1],
  [0, 2, 0, 0],
  [0, 4, 5, 0],
];

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      const result = getGridObjects(gridData, groups.public);
      console.log(result);
    });
  });
});
