import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { BaseModelVm } from '../../../../_shared/base.model';
import { Expose } from 'class-transformer';
import { UserRole } from '../user-role.enum';

export class UserVm extends BaseModelVm {
    @ApiModelProperty()
    @Expose()
    username: string;
    @ApiModelPropertyOptional()
    @Expose()
    firstName?: string;
    @ApiModelPropertyOptional()
    @Expose()
    lastName?: string;
    @ApiModelPropertyOptional()
    @Expose()
    fullName?: string;
    @ApiModelPropertyOptional({ enum: UserRole })
    @Expose()
    role?: UserRole;
}
