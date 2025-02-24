export type Row = Digit[];
export type RowIdx = [number, number][];
export type Grid = Row[];
export type GridIdx = RowIdx[];
export type UnitData = [number, number, number, number, number];
export type UnitDataWithMirroredOutput = [
  number,
  number,
  number,
  number,
  number,
  number
];
export type UnitDataWithId = (string | number)[];
export type AreaData = UnitData[];
export type AreaDataWithMirroredOutput = UnitDataWithMirroredOutput[];
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

export type DAGNodes =
  | "input"
  | "output"
  | "public"
  | "group"
  | "body"
  | "piece"
  | "root"
  | string;
export interface DAGNode {
  name: DAGNodes;
  children: DAGNode[];
  units: UnitData[];
  index: number;
  id?: string;
}

export type GridObjectTypes = Society | Periphery | City | Fragment | Floor;

export type CombinedType = `${Society}_${Periphery | City}`;
export type GridGroupTypes = CombinedType | GridObjectTypes;

export type IslandsTypes = {
  [key in GridObjectTypes | CombinedType]?: IslandSelectorConfig[];
};

export type RawNodeTreeData = { [key: string]: UnitData[] };

export type IslandClasses = "group" | "body" | "limb" | "unit" | "incomplete";

export type IslandClassObject = {
  area: UnitData[];
  islandGrid: Grid;
  islandClass: IslandClasses;
};
export type IslandClassesOutput = {
  [key in IslandClasses]?: IslandClassObject[];
};

export type ClassifyIslands = (areas: FieldsData) => IslandClassesOutput;

// export const classifyIslands = (areas: FieldsData) => {
//   return areas
//     .map((area) => {
//         const island = mountGrid(area)
//         const [x,y] = getFirstNonZero(island)
//         const islandClass = classifyIsland(island, x, y)
//         return {
//             area,
//             islandGrid: island,
//             islandClass,
//         };
//     })
// };

export type IslandSelectorConfig = {
  selectors: ConditionGroups;
  excludeUnits: boolean;
  floor: boolean;
};

export type ConfigIslandSelector = (
  grid: Grid,
  config: IslandSelectorConfig[]
) => FieldsData;
export type GridOriginIdx = { x: number; y: number };

export type GetGridObjects = (
  grid: Grid,
  config?: IslandSelectorConfig[],
  origins?: GridOriginIdx
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
  floor?: boolean,
  originX?: number,
  originY?: number
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

export type StatProp = {
  length: number;
  items: { id: string; area: AreaDataWithMirroredOutput | AreaData }[];
};

export type StatPropName = "color" | "length" | "colorLength";

export type StatObject = {
  [key: string]: StatProp;
};

export type StatProps = {
  [key in StatPropName]: StatObject;
};

export interface Difference {
  removed: StatObject;
  added: StatObject;
  changed: {
    [key: string]: {
      input: StatProp;
      output: StatProp;
    };
  };
}

export type StatsArr = [
  number,
  number,
  string,
  AreaData | AreaDataWithMirroredOutput
][];

export type GridTypes = "input" | "output";
