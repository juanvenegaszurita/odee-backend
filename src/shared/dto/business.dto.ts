import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  rut?: string;

  @ApiProperty()
  @IsInt()
  users_id?: number;
}
