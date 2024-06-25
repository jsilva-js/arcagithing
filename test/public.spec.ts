import { getFields } from "../src/utils/groups";
import { Allowed, Grid } from "../src/types";

// 009d5c81
const gridData: Grid = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 1, 0],
];

const publicBodyClasses: Allowed = {
  public: true,
  floor: false,
  private: false,
  body: true,
  limb: false,
};

describe("Public", () => {
  describe("get public function", () => {
    it("retrieve all fields of a grid data", () => {
      const fields = getFields(gridData, publicBodyClasses);
      console.log(fields);
    });
  });
});
