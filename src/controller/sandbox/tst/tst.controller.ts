import { Controller, Get, Req, Res, HttpCode, Post, HttpException, HttpStatus, ForbiddenException, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express';

import { products, Product } from './mockdata/products';
import { heroes, Hero } from './mockdata/heroes';
import { dump } from '../../../_shared/utilities/tools';
import { LoggingInterceptor } from '../../../_shared/interceptors/logging.interceptor';

@Controller('tst')
@UseInterceptors(LoggingInterceptor)
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

    @Get('excep')
    getExcep(@Res() res: Response): Product[] {
        // throw new ForbiddenException('My forbidden message');
        // throw new HttpException('MyForbiddens messages....', HttpStatus.FORBIDDEN);
        // throw new HttpException('未授权使用', HttpStatus.UNAUTHORIZED);
        throw new UnauthorizedException();
        // res.send(products);
        // return products;
    }

    @Post()
    create(@Req() req: Request): string {
        return 'This action adds a new tst';
    }
}
