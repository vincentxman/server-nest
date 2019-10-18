import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatDto } from './dto/cat.dto';
import { Cat } from './models/cat';
import { ID } from 'type-graphql';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async create(data: CatDto): Promise<Cat> {
        const createdCat = new this.catModel(data);
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find();
    }

    async findOneById(id: string): Promise<Cat> {
        return await this.catModel.findOne({ _id: id });
    }

    async delete(id: string): Promise<Cat> {
        return await this.catModel.findByIdAndRemove(id);
    }

    async update(id: string, cat: CatDto): Promise<Cat> {
        return await this.catModel.findByIdAndUpdate(id, cat, { new: true });
    }
}
