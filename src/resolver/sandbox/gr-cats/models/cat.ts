import { Field, ID, ObjectType, Int } from 'type-graphql';
import { Min } from 'class-validator';

@ObjectType()
export class Cat {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field(type => Int)
    @Min(0)
    age: number;

    @Field({ nullable: true })
    breed?: string;
}
