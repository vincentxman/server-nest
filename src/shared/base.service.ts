import 'automapper-ts/dist/automapper';
import { Document, Model, Types } from 'mongoose';

export abstract class BaseService<T extends Document> {

    protected mModel: Model<T>;
    protected mMapper: AutoMapperJs.AutoMapper;

    private get modelName(): string {
        return this.mModel.modelName;
    }

    private get viewModelName(): string {
        return `${this.mModel.modelName}Vm`;
    }

    async map<K>(
        object: Partial<T> | Array<Partial<T>>,
        isArray: boolean = false,
        sourceKey?: string,
        destinationKey?: string,
    ): Promise<K> {
        const mSourceKey = isArray ? `${sourceKey || this.modelName}[]` : sourceKey || this.modelName;
        const mDestinationKey = isArray
            ? `${destinationKey || this.viewModelName}[]`
            : destinationKey || this.viewModelName;
        return this.mMapper.map(mSourceKey, mDestinationKey, object);
    }

    async findAll(filter = {}): Promise<T[]> {
        return this.mModel.find(filter).exec();
    }

    async findOne(filter = {}): Promise<T> {
        return this.mModel.findOne(filter).exec();
    }

    async findById(id: string): Promise<T> {
        return this.mModel.findById(this.toObjectId(id)).exec();
    }

    async create(item: T): Promise<T> {
        return this.mModel.create(item);
    }

    async delete(id: string): Promise<T> {
        return this.mModel.findByIdAndRemove(this.toObjectId(id)).exec();
    }

    async update(id: string, item: T): Promise<T> {
        return this.mModel.findByIdAndUpdate(this.toObjectId(id), item, { new: true }).exec();
    }

    private toObjectId(id: string): Types.ObjectId {
        return Types.ObjectId(id);
    }
}
