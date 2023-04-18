import { Quotation } from './quotation.interface';

export interface Client {
  id?: number;
  name?: string;
  rut?: string;
  address?: string;
  business_id?: number;
  quotation?: Quotation[];
}
