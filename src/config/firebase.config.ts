import { ConfigService } from '@nestjs/config';
import { ConfigurationsInterface } from '@interfaces/configuration.interface';
import { credential } from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getAuth, inMemoryPersistence } from 'firebase/auth';

export const useFactoryFirebase = async (
  configService: ConfigService<ConfigurationsInterface>,
) => {
  const firebaseConfig = configService.get<string>('FIREBASE_CONFIG');
  initializeApp(JSON.parse(firebaseConfig));
  getAuth().setPersistence(inMemoryPersistence);

  const firebaseCredential = configService.get<string>('FIREBASE_CREDENTIAL');
  return { credential: credential.cert(JSON.parse(firebaseCredential)) };
};
