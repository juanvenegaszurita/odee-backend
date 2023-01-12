import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class ClientDto {
  @ApiProperty()
  @IsInt()
  id?          :number

  @ApiProperty()
  @IsString()
  name?        :string

  @ApiProperty()
  @IsString()
  rut?         :string
  
  @ApiProperty()
  @IsString()
  address?     :string

  @ApiProperty()
  @IsInt()
  business_id? :number
}