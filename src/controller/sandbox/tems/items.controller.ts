import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { TestPipe } from '../../../_shared/pipes/validation.pipe';

@Controller('api/items')
// @UsePipes(TestPipe) // 管道放这里整个类有效
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { } s
    // CRUD Create/Read/Update/Delete

    @Post()
    // @UsePipes(TestPipe) // 管道放这里本函数所有参数有效
    async create( @Body(new TestPipe()) createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Get()
    async findSome(): Promise<Item[]> {
        return this.itemsService.findSome();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }

}
