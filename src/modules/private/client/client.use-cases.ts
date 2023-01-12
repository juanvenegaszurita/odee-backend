import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Client } from '../../../shared/interfaces/client.interface';

@Injectable()
export class ClientUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<Client[]> {
    return await this.dbService.clients.findMany();
  }

  async findUnique(id: number): Promise<Client[]> {
    return this.dbService.clients.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.clients.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.clients.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.clients.delete({
      where: {
        id: id,
      },
    });
  }
}
