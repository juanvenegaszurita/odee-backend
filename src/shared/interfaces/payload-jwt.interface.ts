import { BasePayloadInterface } from './base-payload.interface';

export interface PayloadJWTInterface extends BasePayloadInterface {
  rutTenant?: string;
  idFlow?: string;
  roles?: string;
  UID?: string;
}
