import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { dump } from '../utilities/tools';

// 类验证器
@Injectable()
export class TestPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        dump(metatype.name, 'TestPipe');

        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new BadRequestException('TestPipe 验证参数错误');
        }
        return value;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}