import { Module, DynamicModule, Provider } from "@nestjs/common";
import { UiAvatarsService } from "./ui-avatars.service";
import { UiAvatarsSettingsType } from "./ui.avatars.config";

@Module({})
export class UiAvatarsModule {
  static forRoot(options: UiAvatarsSettingsType & { isGlobal: boolean }) {
    const module: DynamicModule = {
      module: UiAvatarsModule,
      providers: [
        {
          provide: UiAvatarsService,
          useFactory: () => new UiAvatarsService(options || {}),
        },
      ],
      exports: [UiAvatarsService],
    };

    if (options.isGlobal) {
      module.global = true;
    }
    return module;
  }
  static forRootAsync(options: {
    useFactory: (
      ...args: any[]
    ) => Promise<UiAvatarsSettingsType> | UiAvatarsSettingsType;
    inject?: any[];
    isGlobal?: boolean;
  }): DynamicModule {
    const asyncOptionsProvider: Provider = {
      provide: "UI_AVATARS_MODULE_OPTIONS",
      useFactory: options.useFactory,
      inject: options.inject || [],
    };

    const uiAvatarsServiceProvider: Provider = {
      provide: UiAvatarsService,
      useFactory: (opts: UiAvatarsSettingsType) => new UiAvatarsService(opts),
      inject: ["UI_AVATARS_MODULE_OPTIONS"],
    };

    const dynamicModule: DynamicModule = {
      module: UiAvatarsModule,
      providers: [asyncOptionsProvider, uiAvatarsServiceProvider],
      exports: [UiAvatarsService],
    };

    if (options.isGlobal) {
      dynamicModule.global = true;
    }

    return dynamicModule;
  }
}
