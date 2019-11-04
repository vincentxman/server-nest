import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GrQlModule } from './resolver/sandbox/gr-ql/gr-ql.module';
import config from './_shared/_config/keys';
import { SharedModule } from './_shared/shared.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

import { ItemsModule } from './controller/sandbox/tems/items.module';
import { GrCatsModule } from './resolver/sandbox/gr-cats/gr-cats.module';
import { LoggerMiddleware } from './_shared/middleware/logger.middleware';
import { TstController } from './controller/sandbox/tst/tst.controller';



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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'graph*', method: RequestMethod.ALL });
  }
}
