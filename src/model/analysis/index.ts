import { GridTypes } from "../../types";
import { GridManager } from "../controller/gridManager";
import { Grid } from "../grid";
import { Body } from "../grid/body";
import { IDManager } from "../grid/core";
import { ObjectStats, PrivateBody } from "./grid/privateBody";

export class AnalysisManager<T extends Grid> extends GridManager<T> {
  getConstraints(grids: Grid[], gridType: GridTypes): void {
    const privateBodyAnalysis = new PrivateBody().getPrivateBodiesStats(
      grids,
      gridType
    );
    const al = IDManager.getAllInstances();
    console.log(privateBodyAnalysis?.length["3"]);
  }
}
