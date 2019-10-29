
import { IsOptional, Length, MaxLength, Min } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CatDto {
    @Field()
    name: string;

    @Field(type => Int)
    @Min(0)
    age: number;

    @Field({ nullable: true })
    @IsOptional()
    @Length(0, 255)
    breed: string;
}
