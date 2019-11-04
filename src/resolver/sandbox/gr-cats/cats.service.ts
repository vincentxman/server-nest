import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './models/cat';
import { CatDto } from './dto/cat.dto';
import { FindOption } from '../../../_shared/utilities/pagination';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async create(cat: CatDto): Promise<Cat> {
        const createdCat = new this.catModel(cat);
        return await createdCat.save();
        // return await this.catModel.insertMany(cat);
    }

    async findAll(option: FindOption): Promise<Cat[]> {
        const pg = option.pagination;
        return await this.catModel.find(
            option.filter,
            option.sort,
            {
                skip: pg.skip,
                limit: pg.limit,
            }
        );
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
