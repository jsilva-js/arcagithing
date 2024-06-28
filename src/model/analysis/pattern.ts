import { InputOutputPattern } from "./inOutAnalysis";
import { InputPattern } from "./inputAnalysis";
import { OutputPattern } from "./outputAnalysis";

class ObjectStats {
  color: number;
  parts: number;

  constructor(color: number, parts: number) {
    this.color = color;
    this.parts = parts;
  }
}

class PrivateBody extends ObjectStats {
  constructor(color: number, parts: number) {
    super(color, parts);
  }
}

export class Pattern {
  public properties: Record<string, any> = {};

  addProperty(key: string, value: any) {
    this.properties[key] = value;
  }
}

export class CrossCheckPattern extends Pattern {
  constructor(
    public inputPattern: InputPattern,
    public outputPattern: OutputPattern,
    public inputOutputPattern: InputOutputPattern
  ) {
    super();
    // this.mergeProperties();
  }

  //   private mergeProperties() {
  //     // Logic to merge properties from inputPattern, outputPattern, and inputOutputPattern
  //     this.properties = {
  //       ...this.inputPattern.getAllProperties(),
  //       ...this.outputPattern.getAllProperties(),
  //       ...this.inputOutputPattern.getAllProperties(),
  //     };
  //   }
}
