import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessDto {
  @ApiProperty()
  @IsInt()
  id?: number;

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
