import { Module } from '@nestjs/common';
import { GrCatsResolver } from './gr-cats.resolver';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';

@Module({
  providers: [
    GrCatsResolver,
    CatsService,
  ],
  imports: [
    MongooseModule.forFeature([{name: 'Cat', schema: CatSchema}]),
  ],
})
export class GrCatsModule { }
