import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PayloadJWTInterface, TokenJwtInterface } from '@interfaces';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  async create(payload: PayloadJWTInterface): Promise<TokenJwtInterface> {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
