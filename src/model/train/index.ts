import { Grid as GridData } from "../../types";
import {
  Example,
  Grid,
  GridInput,
  GridNature,
  GridOutput,
  GridType,
  TestInput,
  TestOutput,
  TrainInput,
  TrainOutput,
} from "../grid";

export class Sample {
  input: GridInput[] = [];
  output: GridOutput[] = [];

  constructor() {}
  addInput(input: GridData, type: "input", nature: GridNature) {
    this.input.push(new Grid(input, type, nature) as GridInput);
  }

  addOutput(output: GridData, type: "output", nature: GridNature) {
    this.output.push(new Grid(output, type, nature) as GridOutput);
  }

  addTrain(input: GridData, output: GridData) {
    this.addInput(input, "input", "train");
    this.addOutput(output, "output", "train");
  }

  addTest(input: GridData, output: GridData) {
    this.addInput(input, "input", "test");
    this.addOutput(output, "output", "test");
  }

  getTrainInputs() {
    return this.input.filter(
      (grid) => grid.nature === "train" && grid.type === "input"
    ) as TrainInput[];
  }

  getTrainOutputs() {
    return this.output.filter(
      (grid) => grid.nature === "train" && grid.type === "output"
    ) as TrainOutput[];
  }

  getTestInputs() {
    return this.input.filter(
      (grid) => grid.nature === "test" && grid.type === "input"
    ) as TestInput[];
  }

  getTestOutputs() {
    return this.output.filter(
      (grid) => grid.nature === "test" && grid.type === "output"
    ) as TestOutput[];
  }

  getTrainData(): Example[] {
    const inputs = this.getTrainInputs();
    const outputs = this.getTrainOutputs();

    return inputs.map((input, index) => {
      return [input, outputs[index]];
    });
  }
}
