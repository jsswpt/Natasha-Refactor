import { RoadValues } from "../../../shared/data/road";

export type TrafficLightsModelParams = {
  roadName: RoadValues;
};

export class TrafficLightsModel {
  private _roadName: RoadValues;

  constructor(params: TrafficLightsModelParams) {
    this._roadName = params.roadName;
  }

  update() {}

  init() {}
}
