export class GridMonad {
  readonly grid: number[][];
  readonly log: string[];

  constructor(grid: number[][], log: string[] = []) {
    this.grid = grid;
    this.log = log;
  }

  static unit(grid: number[][]): GridMonad {
    return new GridMonad(grid);
  }

  bind(transform: (grid: number[][]) => GridMonad): GridMonad {
    const result = transform(this.grid);
    return new GridMonad(result.grid, this.log.concat(result.log));
  }

  map(transform: (grid: number[][]) => number[][], message: string): GridMonad {
    const newGrid = transform(this.grid);
    return new GridMonad(newGrid, this.log.concat([message]));
  }

  applyEach(eachMonad: EachMonad, type: number): GridMonad {
    const newGrid = eachMonad.apply(this.grid, type);
    return new GridMonad(
      newGrid,
      this.log.concat([`Applied ${type} operation`])
    );
  }
}

export class EachMonad {
  operation: (square: number[][]) => number[][];

  constructor(operation: (square: number[][]) => number[][]) {
    this.operation = operation;
  }

  apply(grid: number[][], squareSize: number): number[][] {
    let newGrid = grid.map((row) => [...row]); // deep copy of the grid

    if (!Number.isInteger(Math.sqrt(squareSize))) {
      throw new Error("Square size must be a perfect square for segmentation.");
    }

    // Process squares in the grid
    for (let blockRow = 0; blockRow < newGrid.length; blockRow += squareSize) {
      for (
        let blockCol = 0;
        blockCol < newGrid[0].length;
        blockCol += squareSize
      ) {
        const square = [];

        // Extract the square
        for (let i = 0; i < squareSize; i++) {
          if (blockRow + i < newGrid.length) {
            const row = [];
            for (let j = 0; j < squareSize; j++) {
              if (blockCol + j < newGrid[0].length) {
                row.push(newGrid[blockRow + i][blockCol + j]);
              }
            }
            square.push(row);
          }
        }

        // Apply transformation to the square
        const transformedSquare = this.operation(square);

        // Replace the original square with the transformed one
        for (
          let i = 0;
          i < transformedSquare.length && blockRow + i < newGrid.length;
          i++
        ) {
          for (
            let j = 0;
            j < transformedSquare[i].length && blockCol + j < newGrid[0].length;
            j++
          ) {
            newGrid[blockRow + i][blockCol + j] = transformedSquare[i][j];
          }
        }
      }
    }

    return newGrid;
  }
}
