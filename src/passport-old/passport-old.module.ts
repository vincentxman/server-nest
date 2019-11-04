import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/strategies/jwt-strategy.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Global()
@Module({
    providers: [AuthService, JwtStrategy],
    exports: [TodoModule, UserModule, AuthService],
    imports: [TodoModule, UserModule],
})
export class PassportOldModule {
}
