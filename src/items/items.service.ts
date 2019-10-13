import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    async readAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async readOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }
}
