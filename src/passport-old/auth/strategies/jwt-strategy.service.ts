import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../jwt-payload.model';
import keys from '../../../_shared/_config/keys';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly _authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: keys.JWT_KEY,
        });
    }

    async validate(payload: JwtPayload, done: VerifiedCallback) {
        const user = await this._authService.validateUser(payload);
        if (!user) {
            return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
        }

        return done(null, user, payload.iat);
    }
}
