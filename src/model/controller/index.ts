import { Grid as GridData } from "../../types";
import { Example, Problem } from "../grid";
import { Input } from "./input";
import { Output } from "./output";

export class Sample {
  private inputManager = new Input();
  private outputManager = new Output();

  constructor(sampleId: string) {
    this.inputManager = new Input(sampleId);
    this.outputManager = new Output(sampleId);
  }

  addTrain(input: GridData, output: GridData) {
    this.inputManager.addInput(input, "train");
    this.outputManager.addOutput(output, "train");
  }

  addTest(input: GridData, output: GridData) {
    this.inputManager.addInput(input, "test");
    this.outputManager.addOutput(output, "test");
  }

  getTrainData(): Example[] {
    const inputs = this.inputManager.getTrainInputs();
    const outputs = this.outputManager.getTrainOutputs();

    return inputs.map((input, index) => [input, outputs[index]]);
  }

  getTestData(): Problem[] {
    const inputs = this.inputManager.getTestInputs();
    const outputs = this.outputManager.getTestOutputs();

    return inputs.map((input, index) => [input, outputs[index]]);
  }
}
