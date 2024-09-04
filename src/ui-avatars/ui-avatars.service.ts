import { Injectable } from "@nestjs/common";
import * as uiavatars from "ui-avatars";
@Injectable()
export class UiAvatarsService {
  generateAvatar = uiavatars.generateAvatar;
}
