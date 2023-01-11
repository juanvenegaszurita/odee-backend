import { ConfigService } from '@nestjs/config';
import { ConfigurationsInterface } from '@interfaces/configuration.interface';

export const useFactoryLogger = async (
  configService: ConfigService<ConfigurationsInterface>,
) => ({
  appenders: {
    console: { type: 'stdout' },
  },
  categories: {
    default: { appenders: ['console'], level: 'info' },
  },
});
