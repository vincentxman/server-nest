import { Resolver, Query } from '@nestjs/graphql';
import { async } from 'rxjs/internal/scheduler/async';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Resolver()
export class GrCatsResolver {
    constructor(private readonly catsService: CatsService) { }

    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query()
    async getCats() {
      return await this.catsService.findAll();
    }

}
