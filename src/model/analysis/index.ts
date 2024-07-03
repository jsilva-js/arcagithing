import { GridTypes, StatProp, StatProps } from "../../types";
import { GridManager } from "../controller/gridManager";
import { Grid } from "../grid";

import { PrivateBody } from "./grid/privateBody";

export class AnalysisManager<T extends Grid> extends GridManager<T> {
  static privateAnalysis: { [key in GridTypes]: StatProps[] } = {
    input: [],
    output: [],
  };

  getConstraints(grids: Grid[], gridType: GridTypes): any {
    const privateBodyConstraints = new PrivateBody().getConstraints(
      grids,
      gridType
    );
    return privateBodyConstraints;
  }

  // groupAndClassifyChangesByGridType(
  //   grids: Grid[],
  //   gridType: GridTypes,
  //   outGrids?: Grid[]
  // ): void {
  //   const privateBodyAnalysis = new PrivateBody().getPrivateBodiesStats(
  //     grids,
  //     gridType,
  //     outGrids
  //   );
  //   // const al = IDManager.getAllInstances();
  //   AnalysisManager.privateAnalysis[gridType].push(...privateBodyAnalysis);
  // }
}
