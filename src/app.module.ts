import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TstController } from './tst/tst.controller';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI, config.mongoOpts)],
  controllers: [AppController, TstController],
  providers: [AppService],
})
export class AppModule { }
