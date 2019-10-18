import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './models/cat';
import { CatDto } from './dto/cat.dto';
// import { PubSub } from 'apollo-server-express';

// const pubSub = new PubSub();

@Resolver(of => Cat)
export class GrCatsResolver {
    constructor(private readonly catsService: CatsService) { }

    @Query(returns => [Cat])
    async cats(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Query(returns => Cat)
    async cat(@Args('id') id: string): Promise<Cat> {
        const cat = await this.catsService.findOneById(id);
        if (!cat) {
            throw new NotFoundException(id);
        }
        return cat;
    }

    @Mutation(returns => Cat)
    async createCat(
        @Args('catDto') catDto: CatDto,
    ): Promise<Cat> {
        const cat = await this.catsService.create(catDto);
        // pubSub.publish('catAdded', { catAdded: Cat });
        return cat;
    }

    @Mutation(returns => Cat)
    async updateCat(
        @Args('id') id: string,
        @Args('catDto') catDto: CatDto,
    ): Promise<Cat> {
        const cat = await this.catsService.update(id, catDto);
        // pubSub.publish('catAdded', { catAdded: Cat });
        return cat;
    }

    @Mutation(returns => Cat)
    async deleteCat(@Args('id') id: string): Promise<Cat> {
        return this.catsService.delete(id);
    }
}

/*
mutation{
  createCat(catDto:{
    name: "cat2",
    age:27,
    breed: "whitedog"
  }){
    id
    name
    age
    breed
  }
}

mutation{
  deleteCat(id:"5da9ea94d78cac2298dcdcb2"){
    id
    name
    age
  }
}

mutation{
  deleteCat(id:"5da9ea94d78cac2298dcdcb2"){
    id
    name
    age
  }
}

query {
  cats {
    id
    name
    age
  }
}

query{
  cat (id:"5da9ea94d78cac2298dcdcb2"){
    name
    age
    breed
  }
}


 */
