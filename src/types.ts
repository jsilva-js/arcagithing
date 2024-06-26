export type Row = Digit[];
export type Grid = Row[];
export type UnitData = [number, number, Digit];
export type AreaData = UnitData[];
export type FieldsData = AreaData[];

export type AllFieldsData = {
  // floor: FieldsData;
  fields: FieldsData;
  // publicBody: FieldsData;
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

export type Selector =
  | "notFloor"
  | "privat"
  | "diagonal"
  | "horizontal"
  | "vertical"
  | "floor";

export type LogicalOperator = "and" | "or" | "not";

export type SelectorOrOperator = Selector | LogicalOperator;

// Recursive type definition for condition groups
export type ConditionElement = SelectorOrOperator | ConditionGroup; // Can be a Selector, Operator, or another Group
export type ConditionGroup = ConditionElement[]; // An array of ConditionElement, allowing nested groups

// Optionally, define a type for the entire configuration to be a single ConditionGroup
export type ConditionGroups = ConditionGroup;
// grid = floor + public
// floor = [holes]
// public = [group] + [semigroup] + [unit]
// group = [body + limb]
// semigroup = [body] + [limb]
// body = [public_body] >= [private_body]
// limb = [public_limb] >= [private_limb]
// private_group = [private_body + private_limb]

export type Society = "public" | "private";
export type Periphery = "semigroup" | "group";
export type City = "limb" | "body";
export type Fragment = "fragment";
export type Floor = "floor";

export type GridObjectTypes = Society | Periphery | City | Fragment | Floor;

export type CombinedType = `${Society}_${Periphery | City}`;

export type IslandsTypes = {
  [key in GridObjectTypes | CombinedType]?: IslandSelectorConfig[];
};

export type IslandSelectorConfig = {
  selectors: ConditionGroups;
  excludeUnits: boolean;
  floor: boolean;
};

export type ConfigIslandSelector = (
  grid: Grid,
  config: IslandSelectorConfig[]
) => FieldsData;

export type GetGridObjects = (
  grid: Grid,
  config?: IslandSelectorConfig[]
) => FieldsData;

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
  units?: boolean,
  floor?: boolean
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
