import { Injectable, ExecutionContext, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import {
  FIREBASE_ADMIN_INJECT,
  FirebaseAdminSDK,
} from '@tfarras/nestjs-firebase-admin';
import { BACKOFFICE } from '@decorators';

@Injectable()
export class FirebaseAuthGuard extends AuthGuard('firebase') {
  constructor(
    private reflector: Reflector,
    @Inject(FIREBASE_ADMIN_INJECT) private firebaseAdmin: FirebaseAdminSDK,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    await super.canActivate(context);
    const request = context.switchToHttp().getRequest();

    const roles = this.reflector.getAll<boolean[]>(BACKOFFICE, [
      context.getHandler(),
      context.getClass(),
    ]);
    const isBackofficeRole = roles.some((e) => !!e);
    if (isBackofficeRole) {
      const decodeToken = await this.firebaseAdmin
        .auth()
        .verifyIdToken(request.headers.authorization.split(' ')[1]);

      return decodeToken?.roles === BACKOFFICE;
    }

    return true;
  }
}
