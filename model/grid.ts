import { CompositeObject } from "./core";
import { Floor } from "./floor";
import { Public } from "./public";

export class Grid extends CompositeObject {
  floor: Floor;
  publicArea: Public;

  constructor() {
    super();
    this.floor = new Floor();
    this.publicArea = new Public();
    this.children = [this.floor, this.publicArea];
  }
}
