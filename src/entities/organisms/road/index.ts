import { RoadValues } from "../../../shared/data/road.js";
import { RoadModel } from "./model.js";
import { RoadView } from "./view.js";

export type RoadParams = {
  name: RoadValues;
};

export class Road {
  private model: RoadModel;
  private view: RoadView;

  constructor(params: RoadParams) {
    this.model = new RoadModel({ name: params.name });
    this.view = new RoadView();
  }

  update() {
    this.model.update();
  }

  render() {
    this.view.render();
  }

  init() {
    console.log("RoadController init");
    this.model.init();
    this.view.init();
  }
}
