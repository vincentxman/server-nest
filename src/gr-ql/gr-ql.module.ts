import { Module } from '@nestjs/common';
import { GrQlResolver } from './gr-ql.resolver';

@Module({
  providers: [
    GrQlResolver,
  ],
})
export class GrQlModule {
}
