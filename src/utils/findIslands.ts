import {
  FieldsData,
  FindIsland,
  GroupFunction,
  LogicalOperator,
  Selector,
  ConditionGroup,
  ConditionGroups,
} from "../types";
import { dfs } from "./dfs";

export const findIslands: FindIsland = (
  grid,
  isPartOfIsland,
  excludeUnits = false,
  floor = false
) => {
  const visited = grid.map((row) => row.map(() => false));
  const islands = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (!visited[x][y] && floor ? grid[x][y] === 0 : grid[x][y] !== 0) {
        const island = dfs(grid, x, y, visited, isPartOfIsland);
        if (island.length > (excludeUnits ? 1 : 0)) {
          // [[x,y,color]...]
          islands.push(island.map(([ix, iy]) => [ix, iy, grid[ix][iy]]));
        }
      }
    }
  }

  return islands as FieldsData;
};

// extended: with diagonals included
// public: different colors
// private: same color
// holes: 0s

// Function to set group criteria based on selectors

export const configIslandSelector: (
  conditionGroups: ConditionGroups
) => GroupFunction = (conditionGroups) => {
  return (grid, x1, y1, x2, y2) => {
    const conditions = {
      notFloor: grid[x1][y1] !== 0 && grid[x2][y2] !== 0,
      privat: grid[x1][y1] === grid[x2][y2],
      diagonal: Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 1,
      horizontal: x1 === x2 && Math.abs(y1 - y2) === 1,
      vertical: y1 === y2 && Math.abs(x1 - x2) === 1,
      perpendicular:
        (x1 === x2 && Math.abs(y1 - y2) === 1) ||
        (y1 === y2 && Math.abs(x1 - x2) === 1),
    };

    // Start with the result of the first group assuming it's a condition group
    let result = evaluateCondition(
      conditionGroups[0] as ConditionGroup,
      conditions
    );

    // Iterate through the array by stepping over elements by 2, assuming alternating pattern
    for (let i = 1; i < conditionGroups.length; i += 2) {
      const operator = conditionGroups[i] as LogicalOperator;
      const nextConditionGroup = conditionGroups[i + 1] as ConditionGroup;
      const nextResult = evaluateCondition(nextConditionGroup, conditions);

      result = applyLogicalOperation(result, nextResult, operator);
    }

    return result;
  };
};

function evaluateCondition(
  group: ConditionGroup,
  conditions: Record<Selector, boolean>
): boolean {
  let result = conditions[group[0] as Selector];

  for (let i = 1; i < group.length; i += 2) {
    const operator = group[i] as LogicalOperator;
    const nextSelector = group[i + 1] as Selector;
    result = applyLogicalOperation(result, conditions[nextSelector], operator);
  }

  return result;
}

function applyLogicalOperation(
  currentResult: boolean,
  nextResult: boolean,
  operator: LogicalOperator
): boolean {
  return operator === "and"
    ? currentResult && nextResult
    : currentResult || nextResult;
}
