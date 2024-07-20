import { AreaData } from "../../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Limb extends CompositeObject {
  children: any[] = [];

  constructor(area: AreaData, origin: string, parentId: string) {
    super(area, origin, parentId);

    if (this.setColorIfPrivate(area)) {
      return;
    }
  }
}
