import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { dump } from '../utilities/tools';
import { tap } from 'rxjs/operators';

@Injectable()
export class ExerciseMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        dump(req.originalUrl, 'ExerciseMiddleware');
        next();
    }
}