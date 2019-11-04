import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { sign, SignOptions } from 'jsonwebtoken';
import { JwtPayload } from './jwt-payload.model';
import { User } from '../../passport-old/user/models/user.model';
import { UserService } from '../../passport-old/user/user.service';
import keys from '../_config/keys';

@Injectable()
export class AuthService {
    private readonly jwtOptions: SignOptions;
    private readonly jwtKey: string;

    constructor(
        @Inject(forwardRef(() => UserService))
        readonly _userService: UserService,
    ) {
        this.jwtOptions = { expiresIn: '12h' };
        this.jwtKey = keys.JWT_KEY;
    }

    async signPayload(payload: JwtPayload): Promise<string> {
        return sign(payload, this.jwtKey, this.jwtOptions);
    }

    async validateUser(validatePayload: JwtPayload): Promise<User> {
        return this._userService.findOne({ username: validatePayload.username.toLowerCase() });
    }
}
