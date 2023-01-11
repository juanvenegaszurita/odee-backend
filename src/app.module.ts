import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AllExceptionsFilter, ValidationPipe } from '@cross';
import { ModuleModules } from '@modules/module.modules';
import { ConfigService } from '@nestjs/config';
import configuration from '@config/configuration';
import { FirebaseAdminModule } from '@tfarras/nestjs-firebase-admin';
import { useFactoryFirebase } from '@config/firebase.config';
import { Log4jsModule } from '@shared/log4js/log4js.module';
import { Log4jsInterceptor } from '@shared/log4js';
import { useFactoryLogger } from '@config/logger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    Log4jsModule.forRootAsync({
      useFactory: useFactoryLogger,
      inject: [ConfigService],
    }),
    ModuleModules,
    FirebaseAdminModule.forRootAsync({
      useFactory: useFactoryFirebase,
      inject: [ConfigService],
    }),
    CacheModule.register(),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: Log4jsInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
