import { Global, Module } from '@nestjs/common';
import { UserModule } from '../passport-old/user/user.module';
import { AuthService } from '../passport-old/auth/auth.service';
import { JwtStrategy } from '../passport-old/auth/strategies/jwt-strategy.service';
import { MapperService } from './mapper/mapper.service';

@Global()
@Module({
    providers: [MapperService, AuthService, JwtStrategy],
    exports: [MapperService, AuthService],
    imports: [UserModule],
})
export class SharedModule {
}
