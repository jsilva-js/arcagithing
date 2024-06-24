import { Grid } from "../../types";
import { findIslands, groupsSelectors } from "../findIslands";

export const floor = (grid: Grid): number[][][] =>
  findIslands(grid, groupsSelectors.floor.extended, false, true);

export const publicArea = (grid: Grid): number[][][] =>
  findIslands(grid, groupsSelectors.public.extended, false, false);
