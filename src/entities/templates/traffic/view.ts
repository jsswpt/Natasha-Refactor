import { AvailableRoads } from "../../../shared/data/road";

export type TrafficViewParams = {};

export class TrafficView {
  private _id: string;
  constructor(params?: TrafficViewParams) {
    this._id = "traffic";
  }

  get id() {
    return this._id;
  }

  private createRoadWrappers() {
    const elementsAsString = Object.entries(AvailableRoads).map(
      (item, idx, arr) => `
    <div class='side'>
      <div class='road-wrap'>
        <div class='road-traffic-light-wrap' id='road-${
          item[1]
        }-traffic-light-wrap'>
        </div>
        <div class='road-traffic-info-wrap' id='road-${
          item[1]
        }-traffic-info-wrap'>
        </div>
      </div>
    </div>
    ${idx < arr.length - 1 ? `<div class='separator'></div>` : ``}
    `,
    );

    return elementsAsString.join("");
  }

  private createElement() {
    const wrapper = document.getElementById("app");

    const trafficWrapper = document.createElement("div");
    trafficWrapper.id = this.id;
    trafficWrapper.className = "traffic";

    const elements = this.createRoadWrappers();

    trafficWrapper.innerHTML = elements;

    wrapper?.appendChild(trafficWrapper);
  }

  init() {
    this.createElement();
  }
}
