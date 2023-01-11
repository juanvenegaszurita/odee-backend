import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RequestMethod, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationsInterface } from '@interfaces/configuration.interface';
import { Log4jsService } from '@shared/log4js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose'],
  });

  const configService = app.get(ConfigService<ConfigurationsInterface>);
  app.useLogger(app.get(Log4jsService));
  app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'), {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: configService.get<string>('VERSION').split(','),
  });

  if (configService.get<string>('ENVIRONMENT').toUpperCase() === 'LOCAL') {
    const options = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Swagger Seguro Arriendo')
      .setDescription('Microservicio Prototipo para app Seguros Arriendo')
      .setVersion('1.0.0')
      .addServer(configService.get('URL'), configService.get('ENVIRONMENT'))
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(`${configService.get('GLOBAL_PREFIX')}`, app, document);
  }

  app.enableCors();
  await app.listen(configService.get('PORT'));
}
bootstrap();
