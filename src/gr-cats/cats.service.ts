import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewCatInput } from './dto/create-cat.dto';
import { Cat } from './models/cat';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async create(data: NewCatInput): Promise<Cat> {
        const createdCat = new this.catModel(data);
        return await createdCat.save();
    }

    async findAll(): Promise<Cat []> {
        return await this.catModel.find().next();
    }
}
