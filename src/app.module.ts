import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { TstController } from './controller/t/tst/tst.controller';
import { ItemsController } from './controller/items/items.controller';
import { ItemsService } from './service/items/items.service';

@Module({
  imports: [],
  controllers: [AppController, TstController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
