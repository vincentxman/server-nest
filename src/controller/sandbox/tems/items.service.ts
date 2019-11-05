import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Item } from './interfaces/item.interface';
import { dump } from '../../../_shared/utilities/tools';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    async findSome(): Promise<Item[]> {
        dump('findSome', 'ItemsService');
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        dump('findOne', 'ItemsService');
        return await this.itemModel.findOne({ _id: id });
    }

    async create(item: Item): Promise<Item> {
        dump('create', 'ItemsService');
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        dump('delete', 'ItemsService');
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, item: Item): Promise<Item> {
        dump('update', 'ItemsService');
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }
}
