import { ResponseClass } from '@cross';
import { Injectable } from '@nestjs/common';
import { ResponseInterface } from '@shared';
import { PrismaService } from 'src/prisma/prisma.service';
import { Client } from '../../../shared/interfaces/client.interface';

@Injectable()
export class ClientUseCases extends ResponseClass {
  constructor(private dbService: PrismaService) {
    super();
  }

  async findAll(): Promise<ResponseInterface<Client[]>> {
    const data = await this.dbService.clients.findMany({
      include: {
        business: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async findUnique(id: number): Promise<ResponseInterface<Client[]>> {
    const data = await this.dbService.clients.findMany({
      where: {
        id: id,
      },
      include: {
        business: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async createData(data: any) {
    const returnData = await this.dbService.clients.create({
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async updateData(id: number, data: any) {
    const returnData = await this.dbService.clients.update({
      where: {
        id: id,
      },
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async deleteData(id: number) {
    const returnData = await this.dbService.clients.delete({
      where: {
        id: id,
      },
    });
    return this.success(returnData, { message: 'Ok' });
  }
}
