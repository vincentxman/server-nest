import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './models/cat';
import { CatDto } from './dto/cat.dto';
import { PubSub } from 'apollo-server-express';
import { Int } from 'type-graphql';
import { dump } from '../../../shared/utilities/tools';

const pubSub = new PubSub();

@Resolver(of => Cat)
export class GrCatsResolver {
  constructor(private readonly catsService: CatsService) { }

  @Query(returns => [Cat])
  async cats(
      @Args({ name: 'offset', type: () => Int, defaultValue: 0 }) offset: number,
      @Args({ name: 'limit', type: () => Int, defaultValue: 10 }) limit: number,
    ): Promise<Cat[]> {
    dump(`cats(${offset}, ${limit})`);
    return this.catsService.findAll();
  }

  @Query(returns => Cat)
  async cat(@Args('id') id: string): Promise<Cat> {
    dump(`cat(${id})`);

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
    dump(`createCat(${catDto.name})`);
    const cat = await this.catsService.create(catDto);
    pubSub.publish('catAdded', { catAdded: cat });
    return cat;
  }

  @Subscription(returns => Cat)
  catAdded() {
    dump(`subscription...catAdded()`);
    return pubSub.asyncIterator('catAdded');
  }

  @Mutation(returns => Cat)
  async updateCat(
    @Args('id') id: string,
    @Args('catDto') catDto: CatDto,
  ): Promise<Cat> {
    dump(`updateCat(${id})`);
    // await sleep(3000);
    const cat = await this.catsService.update(id, catDto);
    pubSub.publish('catUpdated', { catUpdated: cat });
    // dump('return update');
    return cat;
  }

  @Subscription(returns => Cat)
  catUpdated() {
    dump(`subscription...catUpdated()`);
    return pubSub.asyncIterator('catUpdated');
    // return {
    //   subscribe: () => {
    //     dump(`subscription...catUpdated()`);
    //     pubSub.asyncIterator('catUpdated');
    //   },
    // };
  }


  @Mutation(returns => Cat)
  async deleteCat(@Args('id') id: string): Promise<Cat> {
    dump(`deleteCat(${id})`);
    const cat = this.catsService.delete(id);
    pubSub.publish('catDeleted', { catDeleted: cat });
    return cat;
  }

  @Subscription(returns => Cat)
  catDeleted() {
    dump(`subscription...catDeleted()`);
    return pubSub.asyncIterator('catDeleted');
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
