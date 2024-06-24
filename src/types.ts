export type Row = Digit[];
export type Grid = Row[];
export type UnitData = [number, number, Digit];
export type AreaData = UnitData[];
export type FieldsData = AreaData[];

export type AllFieldsData = {
  floor: FieldsData;
  publicArea: FieldsData;
};

export type GridArray = Grid[];
export type Visisted = boolean[][];
export type GroupFunction = (
  grid: Grid,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => boolean;
export type FindIsland = (
  grid: Grid,
  isPartOfIsland: Function,
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

type Digit = number & { readonly brand: unique symbol };
