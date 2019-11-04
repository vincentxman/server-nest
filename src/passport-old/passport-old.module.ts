import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/strategies/jwt-strategy.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Global()
@Module({
    imports: [TodoModule, UserModule],
    providers: [AuthService, JwtStrategy],
    exports: [TodoModule, UserModule, AuthService],
})
export class PassportOldModule {
}
