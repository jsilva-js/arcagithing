import { CompositeObject } from "./core";
import { Group } from "./group";
import { SemiGroup } from "./semigroup";

export class Public extends CompositeObject {
  groups: Group[];
  semiGroups: SemiGroup[];

  constructor() {
    super();
    this.groups = [];
    this.semiGroups = [];
  }

  addGroup(group: Group): void {
    this.groups.push(group);
    this.children.push(group);
  }

  addSemiGroup(semiGroup: SemiGroup): void {
    this.semiGroups.push(semiGroup);
    this.children.push(semiGroup);
  }
}
