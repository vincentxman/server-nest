import { Resolver, Query } from '@nestjs/graphql';
// 测试: http://localhost:3000/graphql 
@Resolver('GrQl')
export class GrQlResolver {
    @Query(() => String)
    async hello() {
        return 'GrQl hello world';
    }
}
