import { AvailableRoads, RoadValues } from "../../../shared/data/road";
import { getRandomInt } from "../../../shared/utils/get-random-int";

export type TrafficModelParams = {};

export class TrafficModel {
  private _carsCount: number | null;
  private _activeRoad: RoadValues | null;

  constructor(params?: TrafficModelParams) {
    this._carsCount = null;
    this._activeRoad = null;
  }

  get carsCount(): number | null {
    return this._carsCount;
  }

  set carsCount(value: number) {
    if (value !== this.carsCount) {
      this._carsCount = value;
    }
  }

  get activeRoad(): RoadValues | null {
    return this._activeRoad;
  }

  set activeRoad(value: RoadValues) {
    if (value !== this.activeRoad) {
      this._activeRoad = value;
    }
  }

  private setInitialCarsCount() {
    this.carsCount = getRandomInt(20, 240, Object.keys(AvailableRoads).length);
  }

  private setInitialActiveRoad() {
    const availableRoadsAsArray = Object.entries(AvailableRoads);

    this.activeRoad =
      availableRoadsAsArray[
        getRandomInt(0, availableRoadsAsArray.length - 1)
      ][1];
  }

  init() {
    this.setInitialCarsCount();
    this.setInitialActiveRoad();
  }
}
