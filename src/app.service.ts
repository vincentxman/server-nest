import { Injectable } from '@nestjs/common';
import config from './config/keys';

@Injectable()
export class AppService {
  root(): string {
    const sConfig = JSON.stringify(config, null, '\t'); // config.mongoOpts);
    return `
    <h1>Hello World!</h1>
    <br>
    <p>看到这一页表示您使用 start:dev 启动</p>
    <p>使用 start:prod 启动直接进入 angular 程序</p>
    <pre>${sConfig}</pre>
    `;
  }
}
