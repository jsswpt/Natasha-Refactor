import { RoadValues } from "../../../shared/data/road.js";
import { TrafficLightsModel } from "./model.js";
import { TrafficLightsView } from "./view.js";

export type TrafficLightsParams = {
  roadName: RoadValues;
};

export class TrafficLights {
  private model: TrafficLightsModel;
  private view: TrafficLightsView;

  constructor(params: TrafficLightsParams) {
    this.model = new TrafficLightsModel({ ...params });
    this.view = new TrafficLightsView({ ...params });
  }

  toggleRedLight() {
    this.view.toggleRedLight();
  }

  toggleYellowLight() {
    this.view.toggleYellowLight();
  }

  toggleGreenLight() {
    this.view.toggleGreenLight();
  }

  update() {
    this.model.update();
  }

  render() {
    this.view.render();
  }

  init() {
    this.model.init();
    this.view.init();
  }
}
