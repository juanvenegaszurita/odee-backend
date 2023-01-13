import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ResponseInterface, TokenFirebaseInterface } from '@interfaces';
import { LoginUseCases } from './login.use-cases';
import { ApiTags } from '@nestjs/swagger';
import { Constants } from '@config/constants.enum';
import { SignInBackofficeDto } from '@dto';
import { ValidationPipe } from '@cross';

@Controller('login')
@ApiTags(Constants.PUBLIC)
export class LoginController {
  constructor(private readonly loginUseCases: LoginUseCases) {}

  @Post('')
  signInBackoffice(
    @Body(new ValidationPipe()) signInDto: SignInBackofficeDto,
  ): Promise<ResponseInterface<TokenFirebaseInterface>> {
    return this.loginUseCases.signInBackoffice(
      signInDto.email,
      signInDto.password,
    );
  }
}
