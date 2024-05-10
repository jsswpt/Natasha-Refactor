import { AvailableRoads } from "../../../shared/data/road.js";
import { Road } from "../../organisms/road/index.js";
import { TrafficModel } from "./model.js";
import { TrafficView } from "./view.js";

export type TrafficParams = {};

export class Traffic {
  private model: TrafficModel;
  private view: TrafficView;
  private roads: Road[];

  constructor(params?: TrafficParams) {
    this.model = new TrafficModel();
    this.view = new TrafficView();

    this.roads = Object.entries(AvailableRoads).map(
      ([_, name]) => new Road({ name }),
    );
  }

  update() {}

  render() {}

  init() {
    this.model.init();
    this.view.init();

    this.roads.forEach((item) => item.init());
  }
}
