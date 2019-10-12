import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
    // CRUD Create/Read/Update/Delete

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`;
    }

    @Get()
    readAll(): string {
        return 'Get all items';
    }

    @Get(':id')
    readOne(@Param('id') id) {
        return `Item ${id}`;
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
