import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import keys from './_shared/_config/keys';
import { SharedModule } from './_shared/shared.module';

import { ItemsModule } from './controller/sandbox/tems/items.module';
import { TstController } from './controller/sandbox/tst/tst.controller';
import { ExerciseMiddleware } from './_shared/middleware/exercise.middleware';
import { PassportOldModule } from './passport-old/passport-old.module';
import { ResolverModule } from './resolver/resolver.module';



@Module({
  imports: [
    MongooseModule.forRoot(keys.mongoURI, keys.mongoOpts),
    GraphQLModule.forRoot(keys.graphOpts),
    SharedModule,
    PassportOldModule,

    ItemsModule,
    ResolverModule,
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
