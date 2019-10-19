import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TstController } from './tst/tst.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GrQlModule } from './gr-ql/gr-ql.module';
import { SharedModule } from './shared/shared.module';
import config from './config/keys';

// import { ItemsModule } from './items/items.module';
// import { GrCatsModule } from './gr-cats/gr-cats.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI, config.mongoOpts),
    GraphQLModule.forRoot(config.graphOpts),

    // GrCatsModule,
    // ItemsModule,
    GrQlModule,
    SharedModule,
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
