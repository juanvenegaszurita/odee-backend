import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class QuoteDto {
  @ApiProperty()
  @IsInt()
  id?          :number

  @ApiProperty()
  @IsString()
  title?       :string

  @ApiProperty()
  @IsString()
  detail?      :string

  @ApiProperty()
  @IsString()
  dateQuote?   :string

  @ApiProperty()
  @IsInt()
  clients_id?  :number

  @ApiProperty()
  @IsInt()
  file_id?     :number
}
