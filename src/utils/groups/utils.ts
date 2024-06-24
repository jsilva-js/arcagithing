import { GridArray } from "../../types";

export const groupSizesSum = (groups: GridArray): number =>
  groups.map((group) => group.length).reduce((acc, curr) => acc + curr, 0);
