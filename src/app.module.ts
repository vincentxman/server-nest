import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TstController } from './tst/tst.controller';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GrQlModule } from './gr-ql/gr-ql.module';
import { GrCatsModule } from './gr-cats/gr-cats.module';
import config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI, config.mongoOpts),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),

    ItemsModule,
    GrQlModule,
    GrCatsModule,
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
