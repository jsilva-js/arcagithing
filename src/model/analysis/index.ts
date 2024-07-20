import { GridTypes, StatProp, StatProps } from "../../types";
import { GridManager } from "../controller/gridManager";
import { Grid } from "../grid";

import { PrivateObjects } from "./grid/private";

export class AnalysisManager<T extends Grid> extends GridManager<T> {
  static privateAnalysis: { [key in GridTypes]: StatProps[] } = {
    input: [],
    output: [],
  };

  // getConstraints(grids: Grid[], gridType: GridTypes): any {
  //   const privateBodyConstraints = new PrivateObjects().getConstraints(
  //     grids,
  //     gridType
  //   );
  //   return privateBodyConstraints;
  // }

  getGridSizes(grids: Grid[]): [number, number][] {
    return grids.map((grid) => [grid.width, grid.height]);
  }

  groupAndClassifyChangesByGridType(
    grids: Grid[],
    gridType: GridTypes,
    outGrids?: Grid[]
  ) {
    const privateBodyAnalysis = new PrivateObjects().getPrivateBodiesStats(
      grids,
      gridType,
      outGrids
    );
    // const al = IDManager.getAllInstances();
    AnalysisManager.privateAnalysis[gridType].push(...privateBodyAnalysis);
    return privateBodyAnalysis;
  }

  getInputsPrivates(grids: Grid[], gridType: GridTypes) {
    const privateBodyAnalysis = new PrivateObjects().getAllPrivates(
      grids,
      gridType
    );
    // const al = IDManager.getAllInstances();
    return privateBodyAnalysis;
  }
}
