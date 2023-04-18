import { IsString, IsInt, IsDate } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  email?: string;

  @ApiProperty()
  @IsInt()
  roles_id?: number;
}
