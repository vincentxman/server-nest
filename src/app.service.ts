import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return '<h1>Hello World!</h1><br><p>看到这一页表示您使用 start:dev 启动</p><p>使用 start:prod 启动直接进入 angular 程序</p>';
  }
}
