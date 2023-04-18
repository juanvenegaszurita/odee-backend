import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FileDto {
  @ApiProperty()
  @IsString()
  url?: string;

  @ApiProperty()
  @IsInt()
  typeFile_id?: number;
}
