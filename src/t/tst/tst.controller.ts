import { Controller, Get, Req, Res, HttpCode, Post } from '@nestjs/common';
import { Request, Response } from 'express';

import { products, Product } from './mockdata/products';
import { heroes, Hero } from './mockdata/heroes';

@Controller('tst')
export class TstController {
    @Get()
    findAll(@Res() resizeBy: Response): string {

        return 'This action return all tst';
    }

    @Get('products')
    getProducts(@Res() res: Response): Product[] {
        res.send(products);
        return products;
    }

    @Get('heroes')
    getHeroes(@Res() res: Response): Hero[] {
        res.send(heroes);
        return heroes;
    }

    @Post()
    create(@Req() req: Request): string {
        return 'This action adds a new tst';
    }
}
