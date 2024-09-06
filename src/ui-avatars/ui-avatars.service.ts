import { Injectable } from "@nestjs/common";
import { UiAvatars } from "ui-avatars-api";
import { UiAvatarsSettingsType } from "./ui.avatars.config";
@Injectable()
export class UiAvatarsService extends UiAvatars {
  constructor(defaultOptions: UiAvatarsSettingsType) {
    super({ ...defaultOptions });
  }
}
