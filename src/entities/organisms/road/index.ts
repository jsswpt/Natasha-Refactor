import { RoadValues } from "../../../shared/data/road.js";
import { TrafficLights } from "../../molecules/traffic-lights/index.js";
import { RoadModel } from "./model.js";
import { RoadView } from "./view.js";

export type RoadParams = {
  name: RoadValues;
};

type Init = {
  activeRoadName: RoadValues;
  carsCount: number;
};

export class Road {
  private model: RoadModel;
  private view: RoadView;
  private trafficLights: TrafficLights;

  constructor(params: RoadParams) {
    this.model = new RoadModel({
      name: params.name,
      onIsActiveStateChanged: this.onIsActiveStateChanged,
    });
    this.view = new RoadView();

    this.trafficLights = new TrafficLights({ roadName: params.name });
  }

  private onIsActiveStateChanged = (isActive: boolean) => {
    if (isActive) {
      this.trafficLights.toggleGreenLight();
    } else {
      this.trafficLights.toggleRedLight();
    }
  };

  getName() {
    return this.model.name;
  }

  getCarsCount() {
    return this.model.carsCount;
  }

  toggleRedLight() {
    this.trafficLights.toggleRedLight();
  }

  toggleYellowLight() {
    this.trafficLights.toggleYellowLight();
  }

  toggleGreenLight() {
    this.trafficLights.toggleGreenLight();
  }

  update() {
    this.model.update();
  }

  render() {
    this.view.render();
  }

  init(params: Init) {
    this.model.init();
    this.view.init();

    this.model.carsCount = params.carsCount;

    this.trafficLights.init();

    this.model.isActive = this.model.name === params.activeRoadName;
  }
}
