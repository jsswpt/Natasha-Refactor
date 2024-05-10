import { TrafficModel } from "./model.js";
import { TrafficView } from "./view.js";

export type TrafficParams = {};

export class Traffic {
  private model: TrafficModel;
  private view: TrafficView;

  constructor(params?: TrafficParams) {
    this.model = new TrafficModel();
    this.view = new TrafficView();
  }

  update() {}

  render() {}

  init() {
    this.model.init();
    this.view.init();
  }
}
