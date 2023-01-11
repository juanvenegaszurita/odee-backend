import { Transform } from 'class-transformer';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const ValidPhone = Transform(
  ({ value }: any) => {
    if (typeof value !== 'string') return undefined;
    const parsed = parsePhoneNumberFromString(value);
    if (!parsed) return undefined;

    return parsed.number;
  },
  { toClassOnly: true },
);
