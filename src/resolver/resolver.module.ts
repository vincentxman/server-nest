import { Global, Module } from '@nestjs/common';
import { GrQlModule } from './sandbox/gr-ql/gr-ql.module';
import { GrCatsModule } from './sandbox/gr-cats/gr-cats.module';

@Module({
    imports: [
        GrQlModule,
        GrCatsModule,
    ],
})
export class ResolverModule {
}
