import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

type FileContent = {
  name: string;
  dir?: string;
  dirname: string;
};

export const getDirname = (metaUrl: string) => {
  // import.meta.url
  return dirname(fileURLToPath(metaUrl));
};

export const getContentFromFile = ({ name, dir, dirname }: FileContent) => {
  try {
    const f_path = path.join(dirname, dir ? dir : "", name);
    return fs.readFileSync(f_path, "utf8");
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
};
