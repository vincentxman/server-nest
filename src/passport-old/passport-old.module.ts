import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/strategies/jwt-strategy.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { SharedModule } from '../_shared/shared.module';

@Global()
@Module({
    imports: [TodoModule, UserModule, SharedModule],
    providers: [AuthService, JwtStrategy],
    exports: [TodoModule, UserModule, AuthService],
})
export class PassportOldModule {
}
