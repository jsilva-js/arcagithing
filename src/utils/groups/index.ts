import { AllFieldsData, Grid } from "../../types";
import { findIslands, configIslandSelector } from "../findIslands";

// export const floor = (grid: Grid) =>
//   findIslands(grid, groupsSelectors.floor.extended, false, true);

export const publicGroups = (grid: Grid) =>
  findIslands(grid, configIslandSelector(["notFloor"]), true, false);

// export const getPublicBody = (grid: Grid) =>
//   findIslands(grid, groupsSelectors.public.normal, true, false);

export const getGridOjbects = (grid: Grid): AllFieldsData => ({
  fields: publicGroups(grid),
});
