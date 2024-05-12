export type TimerModelParams = {
  onChange: (value: number | null) => void;
  onEnd: () => void;
};

export class TimerModel {
  private _time: number | null;
  private _interval: NodeJS.Timeout | null;
  private _onChange: TimerModelParams["onChange"];
  private _onEnd: TimerModelParams["onEnd"];

  constructor(params: TimerModelParams) {
    this._time = null;
    this._interval = null;
    this._onChange = params.onChange;
    this._onEnd = params.onEnd;
  }

  get time(): number | null {
    return this._time;
  }

  set time(value: number) {
    if (value !== this.time) {
      this._time = value;
      this._onChange(value);
    }
  }

  get interval() {
    return this._interval;
  }

  set interval(value) {
    if (value !== this.interval) {
      this._interval = value;
    }
  }

  private handleTimeEnd() {
    clearInterval(this.interval!);
    this.interval = null;
    this._onEnd();
  }

  private tickTimer = () => {
    if (this.time && this.time > 1) {
      this.time = this.time - 1;
    } else {
      this.handleTimeEnd();
    }
  };

  /**
   *
   * @param initialTime value in seconds
   */
  startTimer(initialTime: number) {
    if (!this.interval) {
      this.time = initialTime;

      this.interval = setInterval(this.tickTimer, 1000);
    }
  }

  init() {}
}
