import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class RoleDto {
  @ApiProperty()
  @IsInt()
  id?          :number

  @ApiProperty()
  @IsString()
  description? :string
}