import { DataSets } from "../types";
import { getContentFromFile, getDirname } from "../utils/fileUtils";

const dirname = getDirname(import.meta.url);

const data: string = getContentFromFile({
  name: "arc-agi_evaluation_challenges.json",
  dirname: dirname + "/data",
});

const dataJson: DataSets = JSON.parse(data);

export const inputs = Object.values(dataJson)
  .map((task) => task.train.map((t) => t.input))
  .flat()
  .slice(0, 10);
