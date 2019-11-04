import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GrQlModule } from './resolver/sandbox/gr-ql/gr-ql.module';
import config from './_shared/_config/keys';
import { SharedModule } from './_shared/shared.module';
import { UserModule } from './controller/user/user.module';
import { TodoModule } from './controller/todo/todo.module';

import { ItemsModule } from './controller/sandbox/tems/items.module';
import { GrCatsModule } from './resolver/sandbox/gr-cats/gr-cats.module';
import { TstController } from './controller/sandbox/tst/tst.controller';
import { ExerciseMiddleware } from './_shared/middleware/exercise.middleware';



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
      .apply(ExerciseMiddleware)
      .forRoutes({ path: 'graph*', method: RequestMethod.ALL });
  }
}
