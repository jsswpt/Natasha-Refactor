import { getRandomInt } from "../../../utils/get-random-int";

export type TrafficModelParams = {};

export class TrafficModel {
  private _carsCount: number | null;

  constructor(params?: TrafficModelParams) {
    this._carsCount = null;
  }

  get carsCount(): number | null {
    return this._carsCount;
  }

  set carsCount(value: number) {
    if (value !== this.carsCount) {
      this._carsCount = value;
      console.log(value);
    }
  }

  private setInitialCarsCount() {
    this.carsCount = getRandomInt(20, 240, 2);
  }

  init() {
    this.setInitialCarsCount();
  }
}
