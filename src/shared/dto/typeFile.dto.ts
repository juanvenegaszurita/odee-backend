import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class TypeFileDto {
  @ApiProperty()
  @IsInt()
  id?    :number

  @ApiProperty()
  @IsString()
  name?  :string
}