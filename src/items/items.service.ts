import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    async readAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async readOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id });
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
}
