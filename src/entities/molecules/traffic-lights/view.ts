import { RoadValues } from "../../../shared/data/road";

export type TrafficLightsViewParams = {
  roadName: RoadValues;
};

export class TrafficLightsView {
  private _roadName: RoadValues;

  constructor(params: TrafficLightsViewParams) {
    this._roadName = params.roadName;
  }

  private get roadName() {
    return this._roadName;
  }

  private createElement() {
    const wrapper = document.getElementById(
      `road-${this.roadName}-traffic-light-wrap`,
    );

    if (wrapper) {
      wrapper.innerHTML = `
      <div class='traffic-lights'>
        <div class='traffic-light-item traffic-light-item--red traffic-light-item--inactive' id='traffic-${this.roadName}-red-light'></div>
        <div class='traffic-light-item traffic-light-item--yellow traffic-light-item--inactive' id='traffic-${this.roadName}-yellow-light'></div>
        <div class='traffic-light-item traffic-light-item--green' id='traffic-${this.roadName}-green-light'></div>
      </div>
      `;
    }
  }

  render() {}

  init() {
    this.createElement();
  }
}
