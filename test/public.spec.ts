import { getAllFields } from "../src/utils/groups";
import { Grid } from "../src/types";

// 009d5c81
const gridData: Grid = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 1, 0],
];

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      const { fields, publicBody } = getAllFields(gridData);
      console.log(publicBody);
    });
  });
});
