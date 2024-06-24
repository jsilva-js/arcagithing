import { CompositeObject } from "./core";

export class Body extends CompositeObject {
  publicBody: boolean;

  constructor(publicBody: boolean) {
    super();
    this.publicBody = publicBody;
  }
}
