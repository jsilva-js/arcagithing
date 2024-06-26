import { AreaData } from "../types";
import { Body } from "./body";
import { CompositeObject } from "./core";
import { Limb } from "./limb";

export class SemiGroup extends CompositeObject {
  bodies: Body[] = [];
  limbs: Limb[] = [];

  constructor(fields: AreaData[]) {
    super(fields.flat());
  }
}
