import { Traffic } from "../entities/templates/traffic/index.js";
import { AppModel } from "./model.js";
import { AppView } from "./view.js";

export type AppParams = {};

export class App {
  private traffic: Traffic;

  private model: AppModel;
  private view: AppView;

  constructor(params?: AppParams) {
    this.traffic = new Traffic();

    this.model = new AppModel();
    this.view = new AppView();
  }

  init() {
    this.model.init();
    this.view.init();
    this.traffic.init();
  }
}
