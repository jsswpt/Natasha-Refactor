import { AvailableRoads, RoadValues } from "../../../shared/data/road";
import { getRandomInt } from "../../../shared/utils/get-random-int";

export type TrafficModelParams = {
  onActiveRoadChange: (value: RoadValues) => void;
};

export class TrafficModel {
  private _carsCount: number | null;
  private _activeRoad: RoadValues | null;
  private onActiveRoadChange: TrafficModelParams["onActiveRoadChange"];

  constructor(params: TrafficModelParams) {
    this._carsCount = null;
    this._activeRoad = null;
    this.onActiveRoadChange = params.onActiveRoadChange;
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
      this.onActiveRoadChange(value);
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

  switchActiveRoad() {
    this.activeRoad = this.activeRoad === "a" ? "b" : "a";
    this.onActiveRoadChange(this.activeRoad);
  }

  init() {
    this.setInitialActiveRoad();
    this.setInitialCarsCount();
  }
}
