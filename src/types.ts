export type Row = Digit[];
export type Grid = Row[];
export type UnitData = [number, number, Digit];
export type AreaData = UnitData[];
export type FieldsData = AreaData[];

export type AllFieldsData = {
  floor: FieldsData;
  fields: FieldsData;
  publicBody: FieldsData;
};

export type GridArray = Grid[];
export type Visisted = boolean[][];

export type Step = {
  grid: Grid;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

type ChecksTypes = "perpendicular" | "diagonal" | "same" | "hole";
export type ChecksInput = {
  [key in ChecksTypes]: boolean;
};
export type Checks = {
  [key: string]: Function;
};

type AreasClassification = "public" | "floor" | "private" | "body" | "limb";

export type Allowed = {
  [key in AreasClassification]: boolean;
};

export type FieldsClassification = (
  checks: ChecksInput,
  allowedClasses: Allowed
) => boolean;
export type GroupFunction = (
  grid: Grid,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => boolean;
export type FindIsland = (
  grid: Grid,
  allowedClasses: Allowed,
  strict?: boolean,
  zero?: boolean
) => FieldsData;

export type TrainData = {
  input: GridArray;
  output: GridArray;
};

// Define a type for the TestData object
export type TestData = {
  input: GridArray;
};

export type DataSets = {
  [key: string]: {
    train: TrainData[];
    test: TestData[];
  };
};

type Digit = (number & { readonly brand: unique symbol }) | number;
