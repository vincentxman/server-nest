import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }
    // CRUD Create/Read/Update/Delete

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`;
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
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
        return `Update ${id} - Name: ${updateItemDto.name}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }

}
