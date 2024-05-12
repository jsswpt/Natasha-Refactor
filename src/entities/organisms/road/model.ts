import { RoadValues } from "../../../shared/data/road";

export type RoadModelParams = {
  name: RoadValues;
  onIsActiveStateChanged: (isActive: boolean) => void;
};

export class RoadModel {
  private _name: RoadModelParams["name"];
  private _isActive: boolean | null;
  private _carsCount: number | null;
  private onIsActiveStateChanged: RoadModelParams["onIsActiveStateChanged"];

  constructor(params: RoadModelParams) {
    this._name = params.name;
    this._isActive = null;
    this._carsCount = null;
    this.onIsActiveStateChanged = params.onIsActiveStateChanged;
  }

  get name() {
    return this._name;
  }

  get isActive(): boolean | null {
    return this._isActive;
  }

  set isActive(value: boolean) {
    if (value !== this.isActive) {
      this._isActive = value;
      this.onIsActiveStateChanged(value);
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

  init() {}
}
