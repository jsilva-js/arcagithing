import {
  FieldsData,
  FindIsland,
  GroupFunction,
  LogicalOperator,
  Selector,
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

    return evaluateCondition(conditionGroups, conditions);
  };
};

function evaluateCondition(
  group: ConditionGroups,
  conditions: Record<Selector, boolean>
): boolean {
  let result: boolean | undefined;
  let applyNot = false; // To handle the 'not' operator

  for (let i = 0; i < group.length; i++) {
    const element = group[i];
    if (typeof element === "string") {
      if (element === "not") {
        applyNot = !applyNot; // Toggle the application of 'not'
        continue;
      }
      if (element === "and" || element === "or") {
        continue; // Logical operators are processed in pairs
      }
    }

    let currentResult = Array.isArray(element)
      ? evaluateCondition(element, conditions)
      : conditions[element as Selector];

    if (applyNot) {
      currentResult = !currentResult; // Apply 'not' to the current result
      applyNot = false; // Reset not after applying it
    }

    result =
      result === undefined
        ? currentResult
        : applyLogicalOperation(
            result,
            currentResult,
            group[i - 1] as LogicalOperator
          );
  }

  return result ?? false; // Handle undefined result if empty group
}

function applyLogicalOperation(
  currentResult: boolean,
  nextResult: boolean,
  operator: LogicalOperator
): boolean {
  switch (operator) {
    case "and":
      return currentResult && nextResult;
    case "or":
      return currentResult || nextResult;
    default:
      return currentResult; // By default return the current result if operator is not recognized
  }
}
