import { AppModel } from "./model.js";
import { AppView } from "./view.js";

export type AppParams = {};

export class App {
  private model: AppModel;
  private view: AppView;

  constructor(params?: AppParams) {
    this.model = new AppModel();
    this.view = new AppView();
  }

  init() {
    this.model.init();
    this.view.init();
  }
}
