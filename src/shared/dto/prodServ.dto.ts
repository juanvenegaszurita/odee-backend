import { IsString, IsInt } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProdServDto {
  @ApiProperty()
  @IsString()
  detail: string;

  @ApiProperty()
  @IsInt()
  price: number;

  @ApiProperty()
  @IsString()
  type: string;
}
