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
      <div class='road-wrap' id='road-${item[1]}-wrap'></div>
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
