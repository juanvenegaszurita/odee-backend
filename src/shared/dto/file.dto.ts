import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from "@nestjs/swagger"

export class FileDto {
  @ApiProperty()
  @IsInt()
  id?            :number

  @ApiProperty()
  @IsString()
  url?           :string

  @ApiProperty()
  @IsString()
  mimeType?      :string

  @ApiProperty()
  @IsInt()
  typeFile_id?   :number
}