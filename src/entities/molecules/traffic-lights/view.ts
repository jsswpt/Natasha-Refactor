import { RoadValues } from "../../../shared/data/road";

export type TrafficLightsViewParams = {
  roadName: RoadValues;
};

export class TrafficLightsView {
  private _roadName: RoadValues;
  private _redLight: HTMLElement | null;
  private _yellowLight: HTMLElement | null;
  private _greenLight: HTMLElement | null;

  constructor(params: TrafficLightsViewParams) {
    this._roadName = params.roadName;
    this._redLight = null;
    this._yellowLight = null;
    this._greenLight = null;
  }

  private get roadName() {
    return this._roadName;
  }

  private createElement() {
    const wrapper = document.getElementById(
      `road-${this.roadName}-traffic-light-wrap`,
    );

    const greenLightEl = document.createElement("div");
    greenLightEl.id = `traffic-${this.roadName}-green-light`;
    greenLightEl.classList.add(
      "traffic-light-item",
      "traffic-light-item--green",
      "traffic-light-item--inactive",
    );

    this._greenLight = greenLightEl;

    const yellowLightEl = document.createElement("div");
    yellowLightEl.id = `traffic-${this.roadName}-yellow-light`;
    yellowLightEl.classList.add(
      "traffic-light-item",
      "traffic-light-item--yellow",
      "traffic-light-item--inactive",
    );

    this._yellowLight = yellowLightEl;

    const redLightEl = document.createElement("div");
    redLightEl.id = `traffic-${this.roadName}-red-light`;
    redLightEl.classList.add(
      "traffic-light-item",
      "traffic-light-item--red",
      "traffic-light-item--inactive",
    );

    this._redLight = redLightEl;

    const trafficLightsEl = document.createElement("div");
    trafficLightsEl.className = "traffic-lights";

    trafficLightsEl.append(redLightEl, yellowLightEl, greenLightEl);

    if (wrapper) {
      wrapper.appendChild(trafficLightsEl);
    }
  }

  toggleRedLight() {
    console.log("toggleRedLight");
    this._redLight?.classList.remove("traffic-light-item--inactive");
    this._yellowLight?.classList.add("traffic-light-item--inactive");
    this._greenLight?.classList.add("traffic-light-item--inactive");
  }

  toggleYellowLight() {
    this._redLight?.classList.add("traffic-light-item--inactive");
    this._yellowLight?.classList.remove("traffic-light-item--inactive");
    this._greenLight?.classList.add("traffic-light-item--inactive");
  }

  toggleGreenLight() {
    console.log("toggleGreenLight");
    this._redLight?.classList.add("traffic-light-item--inactive");
    this._yellowLight?.classList.add("traffic-light-item--inactive");
    this._greenLight?.classList.remove("traffic-light-item--inactive");
  }

  render() {}

  init() {
    this.createElement();
  }
}
