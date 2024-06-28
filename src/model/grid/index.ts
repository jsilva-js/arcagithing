import { Floor } from "./floor";
import { Public } from "./public";
import { Grid as GridData } from "../../types";
import { CompositeObject } from "./core";

export type GridType = "input" | "output" | "unknown";
export type GridNature = "train" | "test" | "unknown";

export type GridInput = Grid & { type: "input" };
export type GridOutput = Grid & { type: "output" };

export type TrainInput = Grid & { type: "input"; nature: "train" };
export type TestInput = Grid & { type: "input"; nature: "test" };
export type TrainOutput = Grid & { type: "output"; nature: "train" };
export type TestOutput = Grid & { type: "output"; nature: "test" };

export type Example = [TrainInput, TrainOutput];
export type Problem = [TestInput, TestOutput];

export class Grid extends CompositeObject {
  type: GridType = "unknown";
  nature: GridNature = "unknown";
  children: (Floor | Public)[] = [];
  public static gridCount = 0;

  constructor(
    gridData: GridData,
    type: GridType,
    nature: GridNature,
    origin: string
  ) {
    super([], origin);
    this.type = type;
    this.nature = nature;
    const floor = this.extractGridData(gridData, "floor");
    const publicFields = this.extractGridData(gridData, "public");

    this.children.push(
      new Floor(floor, origin + "_floor_" + Floor.floorCount++)
    );
    this.children.push(
      new Public(publicFields, origin + "_public_" + Public.publicCount++)
    );
  }
}
