import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { dump } from '../utilities/tools';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        dump(req.originalUrl, 'LoggerMiddleware');
        next();
    }
}