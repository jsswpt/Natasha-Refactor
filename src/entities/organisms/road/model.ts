import { RoadValues } from "../../../shared/data/road";

export type RoadModelParams = {
  name: RoadValues;
};

export class RoadModel {
  private _name: string;
  private _isActive: boolean;
  private _carsCount: number | null;

  constructor(params: RoadModelParams) {
    this._name = params.name;
    this._isActive = false;
    this._carsCount = null;
  }

  get name() {
    return this._name;
  }

  get isActive() {
    return this._isActive;
  }

  set isActive(value: boolean) {
    if (value !== this.isActive) {
      this._isActive = value;
    }
  }

  get carsCount(): number | null {
    return this._carsCount;
  }

  set carsCount(value: number) {
    if (value !== this.carsCount) {
      this._carsCount = value;
    }
  }

  update() {}

  init() {
    console.log("RoadModel init");
  }
}
