import { Module } from '@nestjs/common';

import { JwtModule as JwtM } from '@nestjs/jwt';
import { ConfigurationsInterface, JwtAuthService } from '@shared';
import { ConfigService } from '@nestjs/config';

import { BusinessController } from '@modules/private/business/business.controller';
import { BusinessUseCases } from '@modules/private/business/business.use-cases';
import { PrismaModule } from '@src/prisma/prisma.module';
import { ProdServController } from './prodServ/prodServ.controller';
import { ProdServUseCases } from './prodServ/prodServ.use-cases';
import { TypeFileController } from './typeFile/typeFile.controller';
import { TypeFileUseCases } from './typeFile/typeFile.use-cases';

@Module({
  imports: [
    PrismaModule,
    JwtM.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService<ConfigurationsInterface>) => {
        return {
          publicKey: JSON.parse(config.get('JWT_SECRET')).public_key,
          privateKey: JSON.parse(config.get('JWT_SECRET')).private_key,
          signOptions: {
            expiresIn: '30 days',
            algorithm: 'ES384',
          },
          verifyOptions: { algorithms: ['ES384'] },
        };
      },
    }),
  ],
  controllers: [BusinessController, ProdServController, TypeFileController],
  providers: [
    BusinessUseCases,
    ProdServUseCases,
    TypeFileUseCases,
    JwtAuthService,
  ],
  exports: [],
})
export class PrivateModule {}
