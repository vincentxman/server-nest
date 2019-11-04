import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { dump } from '../../_shared/utilities/tools';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req: Request = context.switchToHttp().getRequest();
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => dump(`[${req.url}] uses ${Date.now() - now}ms`, 'LoggingInterceptor')),
            );
    }
}
