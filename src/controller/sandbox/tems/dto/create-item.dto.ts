import { IsString, IsInt } from "class-validator";

// dto 用于 http 网路传输
export class CreateItemDto {

    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsInt()
    readonly qty: number;

}
