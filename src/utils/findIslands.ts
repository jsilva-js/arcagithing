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
      // Determine if the current cell should start an island search
      const shouldStartIsland = floor ? grid[x][y] === 0 : grid[x][y] !== 0;
      if (!visited[x][y] && shouldStartIsland) {
        const island = dfs(grid, x, y, visited, isPartOfIsland);
        if (island.length > (excludeUnits ? 1 : 0)) {
          // Map the island's coordinates to include values for easier debugging or further processing
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
  conditionGroup: ConditionGroups
) => GroupFunction = (conditionGroup) => {
  return (grid, x1, y1, x2, y2) => {
    const conditions = {
      notFloor: grid[x1][y1] !== 0 && grid[x2][y2] !== 0,
      privat: grid[x1][y1] === grid[x2][y2],
      diagonal: Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 1,
      horizontal: x1 === x2 && Math.abs(y1 - y2) === 1,
      vertical: y1 === y2 && Math.abs(x1 - x2) === 1,
      floor: grid[x1][y1] === 0 && grid[x2][y2] === 0,
    };

    return evaluateGroup(conditionGroup, conditions);
  };
};

function evaluateGroup(
  group: ConditionGroups,
  conditions: Record<Selector, boolean>,
  isNegated: boolean = false
): boolean {
  let result: boolean | undefined;
  let operator: LogicalOperator | undefined;

  for (let i = 0; i < group.length; i++) {
    const element = group[i];

    if (
      typeof element === "string" &&
      (element === "and" || element === "or" || element === "not")
    ) {
      operator = element;
      continue;
    }

    let currentResult: boolean;
    if (Array.isArray(element)) {
      currentResult = evaluateGroup(element, conditions, operator === "not");
      operator = operator === "not" ? undefined : operator; // Reset after applying 'not'
    } else {
      currentResult = conditions[element as Selector];
    }

    if (isNegated) {
      currentResult = !currentResult;
    }

    if (result === undefined) {
      result = currentResult;
    } else if (operator) {
      result = applyLogicalOperation(result, currentResult, operator);
    }
  }

  return result ?? false;
}

function applyLogicalOperation(
  currentResult: boolean,
  nextResult: boolean,
  operator: LogicalOperator
): boolean {
  return operator === "and"
    ? currentResult && nextResult
    : operator === "or"
    ? currentResult || nextResult
    : currentResult; // Default case, should not hit unless there's an error
}
