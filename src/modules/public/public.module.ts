import { Module } from '@nestjs/common';

import { JwtModule as JwtM } from '@nestjs/jwt';
import { ConfigurationsInterface, JwtAuthService } from '@shared';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
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
  controllers: [],
  providers: [JwtAuthService],
  exports: [],
})
export class PublicModule {}
