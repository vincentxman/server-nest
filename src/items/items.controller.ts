import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }
    // CRUD Create/Read/Update/Delete

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Get()
    async readAll(): Promise<Item[]> {
        return this.itemsService.readAll();
    }

    @Get(':id')
    async readOne(@Param('id') id): Promise<Item> {
        return this.itemsService.readOne(id);
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
