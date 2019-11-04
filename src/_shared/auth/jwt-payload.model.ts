import { UserRole } from "../../controller/user/models/user-role.enum";

export interface JwtPayload {
    username: string;
    role: UserRole;
    iat?: Date;
}