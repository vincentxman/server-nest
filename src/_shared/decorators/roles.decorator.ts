import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../passport-old/user/models/user-role.enum';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
