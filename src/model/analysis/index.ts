import { GridTypes, StatProp, StatProps } from "../../types";
import { GridManager } from "../controller/gridManager";
import { Grid } from "../grid";
import { Body } from "../grid/body";
import { IDManager } from "../grid/core";
import { ObjectStats, PrivateBody } from "./grid/privateBody";

export class AnalysisManager<T extends Grid> extends GridManager<T> {
  static privateAnalysis: { [key in GridTypes]: StatProps[] } = {
    input: [],
    output: [],
  };

  getConstraints(grids: Grid[], gridType: GridTypes): void {
    const privateBodyAnalysis = new PrivateBody().getPrivateBodiesStats(
      grids,
      gridType
    );
    // const al = IDManager.getAllInstances();
    AnalysisManager.privateAnalysis[gridType].push(...privateBodyAnalysis);
  }
}
