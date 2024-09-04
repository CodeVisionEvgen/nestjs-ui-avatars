import { Module, DynamicModule } from "@nestjs/common";
import { UiAvatarsService } from "./ui-avatars.service";

@Module({})
export class UiAvatarsModule {
  static forRoot(options: { isGlobal: boolean }) {
    const module: DynamicModule = {
      module: UiAvatarsModule,
      providers: [UiAvatarsService],
      exports: [UiAvatarsService],
    };

    if (options.isGlobal) {
      module.global = true;
    }

    return module;
  }
}
