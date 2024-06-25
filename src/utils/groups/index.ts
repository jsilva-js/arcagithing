import { AllFieldsData, Grid } from "../../types";
import { findIslands, groupsSelectors } from "../findIslands";

export const floor = (grid: Grid) =>
  findIslands(grid, groupsSelectors.floor.extended, false, true);

export const fields = (grid: Grid) =>
  findIslands(grid, groupsSelectors.public.extended, false, false);

export const getPublicBody = (grid: Grid) =>
  findIslands(grid, groupsSelectors.public.normal, true, false);

export const getAllFields = (grid: Grid): AllFieldsData => ({
  floor: floor(grid),
  fields: fields(grid),
  publicBody: getPublicBody(grid),
});
