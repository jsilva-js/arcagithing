import { Grid } from "../../grid";
import { Body } from "../../grid/body";

export class ObjectStats {
  acc: [number, number][] = [];

  addStats(color: number, parts: number): void {
    this.acc.push([color, parts]);
  }
}

export class PrivateBody extends ObjectStats {
  nodes: Body[] = [];

  constructor() {
    super();
  }

  public findAll(node: any): void {
    if (node instanceof Body && !node.children.length) {
      this.nodes.push(node);
      // this.addStats(node.color, node.population);
    }

    if (node.children) {
      node.children.forEach((child: any) => this.findAll(child));
    }
  }

  findPrivateBodies(grid: Grid): Body[] {
    this.findAll(grid);
    return this.nodes;
  }
}
