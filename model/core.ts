import { Unit } from "./unit";

export abstract class CompositeObject {
  units: Unit[];
  children: CompositeObject[];

  constructor() {
    this.units = [];
    this.children = [];
  }

  addUnit(unit: Unit): void {
    this.units.push(unit);
  }

  addChild(child: CompositeObject): void {
    this.children.push(child);
  }
}
