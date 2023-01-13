import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class SignInOwnerDto extends SignInDto {}
export class SignInBackofficeDto extends SignInDto {
  @ApiProperty()
  @IsString()
  token: string;
}
