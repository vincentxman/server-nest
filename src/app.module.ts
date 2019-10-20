import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TstController } from './tst/tst.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GrQlModule } from './gr-ql/gr-ql.module';
import config from './config/keys';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

import { ItemsModule } from './items/items.module';
import { GrCatsModule } from './gr-cats/gr-cats.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI, config.mongoOpts),
    GraphQLModule.forRoot(config.graphOpts),
    SharedModule,
    UserModule,
    TodoModule,

    GrCatsModule,
    ItemsModule,
    GrQlModule,
  ],
  controllers: [
    AppController,
    TstController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule { }
