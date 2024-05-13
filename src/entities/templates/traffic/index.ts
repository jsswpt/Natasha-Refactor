import { AvailableRoads, RoadValues } from "../../../shared/data/road.js";
import { calculateCarNecessaryTime } from "../../../shared/utils/calculate-car-necessary-time/index.js";
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
    this.model = new TrafficModel({
      onActiveRoadChange: this.onActiveRoadChanged,
    });
    this.view = new TrafficView();

    this.roads = Object.entries(AvailableRoads).map(
      ([_, name]) => new Road({ name }),
    );

    this.timer = new Timer({
      onChange: this.onTimerChanged,
      onEnd: this.onTimerEnded,
    });
  }

  onTimerChanged = (value: number | null) => {
    console.log("time", value);
    if (value) {
      if (value <= 4) {
        this.roads.forEach((item) => item.toggleYellowLight());
      } else {
        if (value % 2 === 0) {
          this.roads.forEach((item) => {
            if (item.getName() === this.model.activeRoad) {
              item.decrementCarsCount();
              console.log(item.getName(), item.getCarsCount());
            } else {
              console.log(item.getName(), item.getCarsCount());
            }
          });
        }
      }
    }
  };

  onTimerEnded = () => {
    this.model.switchActiveRoad();
    this.roads.forEach(
      (item) =>
        item.getName() === this.model.activeRoad &&
        this.timer.start(calculateCarNecessaryTime(item.getCarsCount())),
    );
  };

  onActiveRoadChanged = (value: RoadValues) => {
    this.roads.forEach((item) => {
      if (item.getName() === value) {
        item.toggleGreenLight();
      } else {
        item.toggleRedLight();
      }
    });

    // this.timer.start(necessaryTime);
  };

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

    this.timer.start(calculateCarNecessaryTime(carsCountForRoad));
  }
}
