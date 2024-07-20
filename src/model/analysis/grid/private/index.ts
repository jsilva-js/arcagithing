import {
  AreaData,
  AreaDataWithMirroredOutput,
  GridTypes,
  StatProps,
  UnitDataWithId,
} from "../../../../types";
import { Grid } from "../../../grid";
import { Body } from "../../../grid/body";
import { Group } from "../../../grid/group";
import { UnitsManager } from "../../../grid/unit";
import { ObjectStats } from "../stats";

export class PrivateObjects extends ObjectStats {
  nodes: Body[] = [];

  constructor() {
    super();
  }

  public findAll(node: any): void {
    if (!node.children.length && node.color !== -1 && node.length > 1) {
      this.nodes.push(node);
    }

    if (node.children) {
      node.children.forEach((child: any) => this.findAll(child));
    }
  }

  findPrivateObjects(grid: Grid): Body[] {
    this.nodes = [];
    this.findAll(grid);
    return this.nodes;
  }

  getAllPrivates(grids: Grid[], gridType: GridTypes) {
    const result = grids.map((grid) => this.findPrivateObjects(grid));
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

    const privateBodyAnalysis = new PrivateObjects();
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

    return statsProps;
  }

  private mirrorArea(
    area: AreaData,
    outGrid: Grid
  ): AreaDataWithMirroredOutput {
    const grid = outGrid.grid;
    console.log(area, outGrid);
    // Mirror the area within the bounds of the outGridArea, keeping original coordinates
    return area.map(([x, y, color, originalX, originalY]) => [
      x,
      y,
      color,
      originalX,
      originalY,
      Number(grid[originalX] && grid[originalX][originalY]) || -1,
    ]);
  }
}
