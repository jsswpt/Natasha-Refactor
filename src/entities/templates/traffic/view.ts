export type TrafficViewParams = {};

export class TrafficView {
  private _id: string;
  constructor(params?: TrafficViewParams) {
    this._id = "traffic";
  }

  get id() {
    return this._id;
  }

  private createElement() {
    const wrapper = document.getElementById("app");

    const trafficWrapper = document.createElement("div");
    trafficWrapper.id = this.id;
    trafficWrapper.className = "traffic";

    wrapper?.appendChild(trafficWrapper);
  }

  init() {
    this.createElement();
  }
}
