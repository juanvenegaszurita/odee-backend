import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { LoginController } from './public/login/login.controller';
import { LoginUseCases } from './public/login/login.use-cases';

@Module({
  imports: [HttpModule, PrivateModule, PublicModule],
  controllers: [LoginController],
  providers: [LoginUseCases],
})
export class ModuleModules {}
