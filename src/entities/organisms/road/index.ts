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

  toggleYellowLight() {}

  private onIsActiveStateChanged = (isActive: boolean) => {
    console.log(this.model.name, isActive);
    if (isActive) {
      this.trafficLights.toggleGreenLight();
    } else {
      this.trafficLights.toggleRedLight();
    }
  };

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

    if (this.model.name === params.activeRoadName) {
      this.model.isActive = true;
    } else {
      this.model.isActive = false;
    }
  }
}
