import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemSchema } from './schemas/item.schema';

@Module({
  // 让 schema 可以注入到 Service 内的 itemModel:Model<Item>, 如此itemModel 就可以直接操作数据库了
  // constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],

  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule { }
