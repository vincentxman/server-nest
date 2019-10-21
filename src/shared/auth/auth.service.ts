import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { sign, SignOptions } from 'jsonwebtoken';
import { User } from '../../user/models/user.model';
import { UserService } from '../../user/user.service';
import { JwtPayload } from './jwt-payload.model';
import config from '../../config/keys';

@Injectable()
export class AuthService {
    private readonly jwtOptions: SignOptions;
    private readonly jwtKey: string;

    constructor(
        @Inject(forwardRef(() => UserService))
        readonly _userService: UserService,
    ) {
        this.jwtOptions = { expiresIn: '12h' };
        this.jwtKey = config.JWT_KEY;
    }

    async signPayload(payload: JwtPayload): Promise<string> {
        return sign(payload, this.jwtKey, this.jwtOptions);
    }

    async validateUser(validatePayload: JwtPayload): Promise<User> {
        return this._userService.findOne({ username: validatePayload.username.toLowerCase() });
    }
}
