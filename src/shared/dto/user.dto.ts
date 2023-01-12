import { IsString, IsInt, IsDate } from '@nestjs/class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
  @ApiProperty()
  @IsInt()
  id?          :number

  @ApiProperty()
  @IsString()
  name?        :string

  @ApiProperty()
  @IsString()
  clave?       :string

  @ApiProperty()
  @IsDate()
  createdAt?   :Date

  @ApiProperty()
  @IsInt()
  roles_id?    :number
}