import { Grid as GridData } from "../../types";
import { InputOutputAnalysis } from "../analysis/inOutAnalysis";
import { InputAnalysis } from "../analysis/inputAnalysis";
import { OutputAnalysis } from "../analysis/outputAnalysis";
import { Example, Problem } from "../grid";
import { DataStore } from "./gridManager";
import { Input } from "./input";
import { Output } from "./output";

export class Sample {
  private inputManager: Input;
  private outputManager: Output;
  private inputAnalysis: InputAnalysis;
  private outputAnalysis: OutputAnalysis;
  private inputOutputAnalysis: InputOutputAnalysis;
  private dataStore: DataStore;

  constructor(sampleId: string) {
    this.dataStore = new DataStore();
    this.inputManager = new Input(this.dataStore, sampleId);
    this.outputManager = new Output(this.dataStore, sampleId);
    this.inputAnalysis = new InputAnalysis(this.dataStore, sampleId);
    this.outputAnalysis = new OutputAnalysis(this.dataStore, sampleId);
    this.inputOutputAnalysis = new InputOutputAnalysis(
      this.dataStore,
      sampleId
    );
  }

  addTrain(inputData: GridData, outputData: GridData) {
    this.inputAnalysis.addGrid(inputData, "input", "train");
    this.outputAnalysis.addGrid(outputData, "output", "train");
  }

  addTest(inputData: GridData, outputData: GridData) {
    this.inputAnalysis.addGrid(inputData, "input", "test");
    this.outputAnalysis.addGrid(outputData, "output", "test");
  }

  getTrainData(): Example[] | undefined {
    const inputs = this.inputManager.getTrainInputs();
    const outputs = this.outputManager.getTrainOutputs();

    return inputs.map((input, index) => [input, outputs[index]]) as [];
  }

  getTestData(): Problem[] | undefined {
    const inputs = this.inputManager.getTestInputs();
    const outputs = this.outputManager.getTestOutputs();

    return inputs.map((input, index) => [input, outputs[index]]) as [];
  }

  analyzeInputConstraints() {
    return this.inputAnalysis.gatherInputConstraints();
  }

  analyzeOutputConstraints() {
    return this.outputAnalysis.gatherOutputConstraints();
  }

  analyzeInputOutputConstraints() {
    this.analyzeInputConstraints();
    this.analyzeOutputConstraints();
    return this.inputOutputAnalysis.gatherInputOutputConstraints();
  }
}
