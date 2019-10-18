import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './models/cat';
import { NewCatInput } from './dto/create-cat.dto';
import { PubSub } from 'apollo-server-express';

// const pubSub = new PubSub();

@Resolver(of => Cat)
export class GrCatsResolver {
    constructor(private readonly catsService: CatsService) { }

    @Query(returns => [Cat])
    async cats(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Mutation(returns => Cat)
    async createCat(
        @Args('newCatData') newCatData: NewCatInput,
        ): Promise<Cat> {
        const cat = await this.catsService.create(newCatData);
        // pubSub.publish('recipeAdded', { catAdded: Cat });
        return cat;
    }
}
