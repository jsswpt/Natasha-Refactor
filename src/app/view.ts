export type AppViewParams = {};

export class AppView {
  private _id: string;

  constructor(params?: AppViewParams) {
    this._id = "app";
  }

  get id() {
    return this._id;
  }

  private createWrapper() {
    const createdWrapper = document.createElement("div");
    createdWrapper.id = this.id;

    document.body.appendChild(createdWrapper);

    return createdWrapper;
  }

  init() {
    this.createWrapper();
  }
}
