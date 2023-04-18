import { IsInt } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ItemsQuotationDto {
  @ApiProperty()
  @IsInt()
  id?: number;

  @ApiProperty()
  @IsInt()
  cant?: number;

  @ApiProperty()
  @IsInt()
  total?: number;

  @ApiProperty()
  @IsInt()
  quotation_id?: number;

  @ApiProperty()
  @IsInt()
  prodServ_id?: number;
}
