import { Grid } from "../../types";

export const logGrid = (grid: Grid) => {
  const colors = {
    0: "\x1b[30m", // black
    3: "\x1b[35m", // pink
    2: "\x1b[31m", // dark red
    7: "\x1b[33m", // orange
    4: "\x1b[93m", // light orange
    9: "\x1b[33m", // yellow
    6: "\x1b[32m", // green
    1: "\x1b[34m", // blue
    8: "\x1b[94m", // light blue
    5: "\x1b[90m", // grey
    reset: "\x1b[0m", // reset
  };

  console.log("--------------");
  grid.forEach((array) => {
    const line = array
      // @ts-ignore
      .map((num) => `${colors[num] || colors.reset}${num}${colors.reset}`)
      .join(" ");
    console.log(line);
  });
  console.log("--------------");
};
