import { AvailableRoads } from "../../../shared/data/road.js";
import { getRandomInt } from "../../../shared/utils/get-random-int/index.js";
import { Timer } from "../../atoms/timer/index.js";
import { Road } from "../../organisms/road/index.js";
import { TrafficModel } from "./model.js";
import { TrafficView } from "./view.js";

export type TrafficParams = {};

export class Traffic {
  private model: TrafficModel;
  private view: TrafficView;
  private roads: Road[];
  private timer: Timer;

  constructor(params?: TrafficParams) {
    this.model = new TrafficModel();
    this.view = new TrafficView();

    this.roads = Object.entries(AvailableRoads).map(
      ([_, name]) => new Road({ name }),
    );

    this.timer = new Timer({
      onChange: (value) => console.log("changed", value),
      onEnd: () => console.log("end"),
    });
  }

  update() {}

  render() {}

  init() {
    this.model.init();
    this.view.init();

    const carsCountForRoad = this.model.carsCount! / this.roads.length;

    this.roads.forEach((item) =>
      item.init({
        carsCount: carsCountForRoad,
        activeRoadName: this.model.activeRoad!,
      }),
    );

    this.timer.init();
    this.timer.start(getRandomInt(10, 10, 2));
  }
}
