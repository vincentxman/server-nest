import { UserRole } from "../../passport-old/user/models/user-role.enum";

export interface JwtPayload {
    username: string;
    role: UserRole;
    iat?: Date;
}