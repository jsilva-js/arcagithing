import { AreaData } from "../types";
import { CompositeObject } from "./core";
import { Unit } from "./unit";

export class Body extends CompositeObject {
  public static parts: Body[] = [];
  // private static idCounter = 0;
  // private static ids: { [key: string]: number } = {};
  thisCount = 0;
  rest: Unit[] = [];
  id: string = "";

  constructor(area: AreaData, origin: string, thisCount: number) {
    super(area);
    this.id = origin + "_" + thisCount;

    const isThisPrivate = area.every((unit) => unit[2] === area[0][2]);

    if (isThisPrivate) {
      Body.parts.push(this);
      return;
    }

    const parts = this.extractGridData(this.grid, "private_body");

    parts.forEach((part) => {
      if (part.length > 1) {
        this.thisCount++;
        new Body(part, this.id, this.thisCount);
      } else {
        this.rest.push(new Unit(part[0], origin));
      }
    });

    //   const thisAreaStr = JSON.stringify(area);
    //   this.id = origin + "_" + thisCount;
    //   if (Body.ids[thisAreaStr] > 0 || Body.ids[thisAreaStr]) {
    //     return;
    //   }
    //   if (!Body.ids[thisAreaStr]) {
    //     Body.ids[thisAreaStr] = 0;
    //   }
    //   Body.ids[thisAreaStr]++;
    //   Body.idCounter++;

    //   this.splitPublicBody();
    //   console.log(area, this.id);
    // }

    // static addPart(body: Body): void {
    //   // Check for duplicates before adding
    //   const existingBody = Body.parts.find(
    //     (part) => JSON.stringify(part.area) === JSON.stringify(body.area)
    //   );
    //   if (!existingBody) {
    //     Body.parts.push(body);
    //   }
    // }

    // static getParts(): Body[] {
    //   return Body.parts;
    // }

    // splitPublicBody() {
    //   const islandsClasses = this.classifyIslandsData(
    //     this.extractGridData(this.grid, "private_body")
    //   );
    //   Object.entries(islandsClasses).forEach(([islandClass, islandsData]) => {
    //     islandsData.forEach(({ area }) => {
    //       if (islandClass === "body" && area.length > 1) {
    //         this.thisCount++;
    //         Body.addPart(new Body(area, this.id, this.thisCount));
    //       } else if (islandClass === "unit") {
    //         this.rest.push(new Unit(area[0], this.id));
    //       }
    //     });
    //   });
  }
}
