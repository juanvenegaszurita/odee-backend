import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QuotationDto {
  @ApiProperty()
  @IsInt()
  id?: number;

  @ApiProperty()
  @IsString()
  title?: string;

  @ApiProperty()
  @IsString()
  detail?: string;

  @ApiProperty()
  @IsString()
  dateQuotation?: string;

  @ApiProperty()
  @IsInt()
  clients_id?: number;

  @ApiProperty()
  @IsInt()
  file_id?: number;
}
