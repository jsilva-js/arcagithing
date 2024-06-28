import { Grid as GridData } from "../../types";
import { InputOutputAnalysis } from "../analysis/inOutAnalysis";
import { InputAnalysis } from "../analysis/inputAnalysis";
import { OutputAnalysis } from "../analysis/outputAnalysis";
import { Example, Problem } from "../grid";
import { Input } from "./input";
import { Output } from "./output";

export class Sample {
  private inputManager: Input | undefined;
  private outputManager: Output | undefined;
  private inputAnalysis: InputAnalysis;
  private outputAnalysis: OutputAnalysis;
  private inputOutputAnalysis: InputOutputAnalysis;

  constructor(sampleId: string) {
    this.inputManager = new Input(sampleId);
    this.outputManager = new Output(sampleId);
    this.inputAnalysis = new InputAnalysis(sampleId);
    this.outputAnalysis = new OutputAnalysis(sampleId);
    this.inputOutputAnalysis = new InputOutputAnalysis(sampleId);
  }

  addTrain(input: GridData, output: GridData) {
    if (this.inputManager && this.outputManager) {
      this.inputManager.addInput(input, "train");
      this.outputManager.addOutput(output, "train");
      this.inputAnalysis.addGrid(input, "input", "train");
      this.outputAnalysis.addGrid(output, "output", "train");
      this.inputOutputAnalysis.addGrid(input, "input", "train");
      this.inputOutputAnalysis.addGrid(output, "output", "train");
    }
  }

  addTest(input: GridData, output: GridData) {
    if (this.inputManager && this.outputManager) {
      this.inputManager.addInput(input, "test");
      this.outputManager.addOutput(output, "test");
      this.inputAnalysis.addGrid(input, "input", "test");
      this.outputAnalysis.addGrid(output, "output", "test");
      this.inputOutputAnalysis.addGrid(input, "input", "test");
      this.inputOutputAnalysis.addGrid(output, "output", "test");
    }
  }

  getTrainData(): Example[] | undefined {
    if (this.inputManager && this.outputManager) {
      const inputs = this.inputManager.getTrainInputs();
      const outputs = this.outputManager.getTrainOutputs();

      return inputs.map((input, index) => [input, outputs[index]]);
    }
  }

  getTestData(): Problem[] | undefined {
    if (this.inputManager && this.outputManager) {
      const inputs = this.inputManager.getTestInputs();
      const outputs = this.outputManager.getTestOutputs();

      return inputs.map((input, index) => [input, outputs[index]]);
    }
  }

  analyzeInputConstraints() {
    return this.inputAnalysis.gatherInputConstraints();
  }

  analyzeOutputConstraints() {
    return this.outputAnalysis.gatherOutputConstraints();
  }

  analyzeInputOutputConstraints() {
    return this.inputOutputAnalysis.gatherInputOutputConstraints();
  }
}
