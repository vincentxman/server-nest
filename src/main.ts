import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as serveStatic from 'serve-static';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/', serveStatic(path.join(__dirname, '../../client-ng8/dist/audioprint'),
    // { maxAge: '1d', extensions: ['jpg', 'jpeg', 'png', 'gif'] },
  ));

  await app.startAllMicroservicesAsync();
  await app.listen(3000);

}
bootstrap();
