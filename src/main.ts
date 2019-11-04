import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import config from './_shared/_config/keys';
import serveStatic = require('serve-static');
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { HttpExceptionFilter } from './_shared/filters/http-exception.filter';
// import { LoggingInterceptor } from './_shared/interceptors/logging.interceptor';
// import { RolesGuard } from './_shared/guards/roles.guard';
// import { TestPipe } from './controller/sandbox/tems/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/',
    serveStatic(path.join(__dirname, '../../client-ng8/dist/audioprint'),
    // { maxAge: '1d', extensions: ['jpg', 'jpeg', 'png', 'gif'] },
  ));

  doSwagger(app, '/api/docs');

  // app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalGuards(new RolesGuard());
  // app.useGlobalPipes(new TestPipe()); // 全局管道
  // app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(config.port);

}
bootstrap();

function doSwagger(app: INestApplication, prefix: string): void {
  if (!config.useSwagger) {
    return;
  }
  const swaggerOptions = new DocumentBuilder()
    .setTitle('AudioPrint')
    .setDescription('API Documentation')
    .setVersion(config.version)
    .setHost(config.host.split('//')[1] + ':' + config.port)
    .setSchemes('http')
    .setBasePath('/')
    .addBearerAuth('Authorization', 'header')
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup(prefix, app, swaggerDoc, {
    swaggerUrl: `${config.host}${prefix}-json`,
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });
}
