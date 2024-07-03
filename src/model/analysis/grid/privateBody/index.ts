import {
  AreaData,
  AreaDataWithMirroredOutput,
  GridTypes,
  StatProps,
  UnitDataWithId,
} from "../../../../types";
import { Grid } from "../../../grid";
import { Body } from "../../../grid/body";
import { UnitsManager } from "../../../grid/unit";
import { ObjectStats } from "../stats";

export class PrivateBody extends ObjectStats {
  nodes: Body[] = [];

  constructor() {
    super();
  }

  public findAll(node: any): void {
    if (node instanceof Body && !node.children.length) {
      this.nodes.push(node);
    }

    if (node.children) {
      node.children.forEach((child: any) => this.findAll(child));
    }
  }

  findPrivateBodies(grid: Grid): Body[] {
    this.findAll(grid);
    return this.nodes;
  }

  getConstraints(grids: Grid[], gridType: GridTypes) {
    const result = grids.map((grid) => this.findPrivateBodies(grid));
    return result;
  }

  getPrivateBodiesStats(
    grids: Grid[],
    gridType: GridTypes,
    outGrids?: Grid[]
  ): StatProps[] {
    const result: StatProps[] = [];
    grids.forEach((grid: Grid, i) => {
      result.push(
        this.getPrivateBodyStats(
          grid,
          gridType,
          i.toString(),
          outGrids ? outGrids[i] : undefined
        )
      );
    });

    return result;
  }

  getPrivateBodyStats(
    grid: Grid,
    gridType: GridTypes,
    idx: string,
    outGrid?: Grid
  ): StatProps {
    const nodes: Body[] = [];
    const stats = new ObjectStats();

    const privateBodyAnalysis = new PrivateBody();
    privateBodyAnalysis.findAll(grid);
    nodes.push(...privateBodyAnalysis.nodes);

    nodes.forEach((node) => {
      if (outGrid) {
        const outArea = this.mirrorArea(node.area, outGrid);
        stats.addStatsWithOutArea(node.color, node.length, node.id, outArea);
      } else {
        stats.addStats(node.color, node.length, node.id);
      }
    });

    stats.getAggregateUnitsByGridType(gridType, idx).forEach((restUnit) => {
      if (outGrid) {
        const area = this.mirrorArea([restUnit] as AreaData, outGrid);
        stats.addStatsWithOutArea(
          restUnit[2] as number,
          1,
          restUnit[3] as string,
          area
        );
      } else {
        stats.addStats(restUnit[2] as number, 1, restUnit[3] as string);
      }
    });

    const statsProps = stats.processStatsProps(stats.acc);

    console.log("gridType", gridType, statsProps);
    return statsProps;
  }

  private mirrorArea(
    area: AreaData,
    outGrid: Grid
  ): AreaDataWithMirroredOutput {
    const grid = outGrid.grid;

    // Mirror the area within the bounds of the outGridArea, keeping original coordinates
    return area.map(([x, y, color, originalX, originalY]) => [
      x,
      y,
      color,
      originalX,
      originalY,
      Number(grid[originalX][originalY]),
    ]);
  }
}
