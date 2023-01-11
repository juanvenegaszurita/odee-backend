import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';

@Module({
  imports: [HttpModule, PrivateModule, PublicModule],
  controllers: [],
  providers: [],
})
export class ModuleModules {}
