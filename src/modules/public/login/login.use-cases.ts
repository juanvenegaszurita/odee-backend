import { ResponseClass } from '@cross';
import { Injectable, Inject } from '@nestjs/common';
import { ResponseInterface, TokenFirebaseInterface } from '@interfaces';
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithCustomToken,
} from 'firebase/auth';
import {
  FIREBASE_ADMIN_INJECT,
  FirebaseAdminSDK,
} from '@tfarras/nestjs-firebase-admin';
import { PRIVATE_ODEE } from '@decorators';

@Injectable()
export class LoginUseCases extends ResponseClass {
  constructor(
    @Inject(FIREBASE_ADMIN_INJECT) private firebaseAdmin: FirebaseAdminSDK,
  ) {
    super();
  }

  async signInBackoffice(
    email: string,
    password: string,
  ): Promise<ResponseInterface<TokenFirebaseInterface>> {
    await signInWithEmailAndPassword(getAuth(), email, password); //need to verify email and password

    const userRecord = await this.firebaseAdmin.auth().getUserByEmail(email);
    const UID = userRecord.uid;
    const customToken = await this.firebaseAdmin.auth().createCustomToken(UID, {
      roles: PRIVATE_ODEE,
    });

    const userCredential = await signInWithCustomToken(getAuth(), customToken);
    const token_firebase = await userCredential.user.getIdToken();

    return this.success({ token_firebase }, {});
  }
}
