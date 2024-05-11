import { TimerModel, TimerModelParams } from "./model.js";
import { TimerView } from "./view.js";

export type TimerParams = {
  onChange: TimerModelParams["onChange"];
  onEnd: TimerModelParams["onEnd"];
};

export class Timer {
  private model: TimerModel;
  private view: TimerView;

  constructor(params: TimerParams) {
    this.model = new TimerModel({ ...params });
    this.view = new TimerView();
  }

  update() {}

  render() {}

  /**
   *
   * @param initialTime value in seconds
   */
  start(initialTime: number) {
    this.model.startTimer(initialTime);
  }

  init() {
    this.model.init();
    this.view.init();
  }
}
