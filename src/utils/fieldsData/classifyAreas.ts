import {
  ClassifyIslands,
  FieldsData,
  Grid,
  GridObjectTypes,
  IslandClassObject,
  IslandClasses,
  IslandClassesOutput,
} from "../../types";
import { mountGrid } from "./mountGrid";

function dfsPerpendicular(
  grid: Grid,
  x: number,
  y: number,
  visited: boolean[][],
  countVisited: number[]
) {
  const directions = [
    [1, 0], // Right
    [0, 1], // Down
    [-1, 0], // Left
    [0, -1], // Up
  ];
  const stack = [[x, y]];
  visited[x][y] = true;
  countVisited[0]++;

  while (stack.length > 0) {
    const [cx, cy] = stack.pop() as number[];

    for (const [dx, dy] of directions) {
      const nx = cx + dx,
        ny = cy + dy;
      if (
        nx >= 0 &&
        nx < grid.length &&
        ny >= 0 &&
        ny < grid[0].length &&
        !visited[nx][ny] &&
        grid[nx][ny] !== 0
      ) {
        visited[nx][ny] = true;
        stack.push([nx, ny]);
        countVisited[0]++;
      }
    }
  }
}

function dfsAllDirections(
  grid: Grid,
  x: number,
  y: number,
  visited: boolean[][]
) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1], // Perpendicular
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1], // Diagonal
  ];
  const stack = [[x, y]];
  visited[x][y] = true;

  while (stack.length > 0) {
    const [cx, cy] = stack.pop() as number[];

    for (const [dx, dy] of directions) {
      const nx = cx + dx,
        ny = cy + dy;
      if (
        nx >= 0 &&
        nx < grid.length &&
        ny >= 0 &&
        ny < grid[0].length &&
        !visited[nx][ny] &&
        grid[nx][ny] !== 0
      ) {
        visited[nx][ny] = true;
        stack.push([nx, ny]);
      }
    }
  }
}

function dfsDiagonal(
  grid: Grid,
  x: number,
  y: number,
  visited: boolean[][],
  countVisited: number[]
) {
  const directions = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1], // Diagonal directions only
  ];
  const stack = [[x, y]];
  visited[x][y] = true;
  countVisited[0]++;

  while (stack.length > 0) {
    const [cx, cy] = stack.pop() as number[];

    directions.forEach(([dx, dy]) => {
      const nx = cx + dx,
        ny = cy + dy;
      if (
        nx >= 0 &&
        nx < grid.length &&
        ny >= 0 &&
        ny < grid[0].length &&
        !visited[nx][ny] &&
        grid[nx][ny] !== 0
      ) {
        visited[nx][ny] = true;
        stack.push([nx, ny]);
        countVisited[0]++;
      }
    });
  }
}

export function classifyIsland(grid: Grid, x: number, y: number) {
  const totalUnits = grid.flat().filter((value) => value !== 0).length;
  if (totalUnits === 1) {
    return "unit";
  }
  const visitedDiagonal = grid.map((row) => row.map(() => false));
  let countVisitedDiagonal = [0];

  // First, try to traverse using only diagonal directions.
  dfsDiagonal(grid, x, y, visitedDiagonal, countVisitedDiagonal);

  if (countVisitedDiagonal[0] === totalUnits) {
    return "limb"; // All units reached with only diagonal moves.
  }

  // Reset for perpendicular DFS
  const visitedPerpendicular = grid.map((row) => row.map(() => false));
  let countVisitedPerpendicular = [0];

  // Next, try to traverse using only perpendicular directions.
  dfsPerpendicular(grid, x, y, visitedPerpendicular, countVisitedPerpendicular);

  if (countVisitedPerpendicular[0] === totalUnits) {
    return "body"; // All units reached with only perpendicular moves.
  }

  // Reset for full DFS with all directions
  const visitedAllDirections = grid.map((row) => row.map(() => false));

  // Finally, try to traverse using all directions.
  dfsAllDirections(grid, x, y, visitedAllDirections);
  if (visitedAllDirections.flat().filter((v) => v).length === totalUnits) {
    return "group"; // All units reached with all directions.
  }

  return "incomplete"; // Not all units could be reached (shouldn't happen in consistent grids).
}

export const classifyIslands: ClassifyIslands = (areas) => {
  const islandClassesOutput: IslandClassesOutput = {
    body: [],
    limb: [],
    group: [],
    unit: [],
    incomplete: [],
  };
  areas.map((area) => {
    const island = mountGrid(area);
    const [x, y] = getFirstNonZero(island);
    const islandClass = classifyIsland(island, x, y);

    islandClassesOutput[islandClass]?.push({
      area,
      islandGrid: island,
      islandClass,
    });
  });
  return islandClassesOutput;
};

const getFirstNonZero = (grid: Grid) => {
  let x = 0;
  let y = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) {
        x = i;
        y = j;
        break;
      }
    }
  }
  return [x, y];
};
