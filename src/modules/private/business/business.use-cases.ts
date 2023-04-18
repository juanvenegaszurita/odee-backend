import { ResponseClass } from '@cross';
import { Injectable } from '@nestjs/common';
import { ResponseInterface } from '@shared';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  Business,
  BusinessAll,
} from 'src/shared/interfaces/business.interface';

@Injectable()
export class BusinessUseCases extends ResponseClass {
  constructor(private dbService: PrismaService) {
    super();
  }

  async findAll(): Promise<ResponseInterface<Business[]>> {
    const data = await this.dbService.business.findMany({
      include: {
        users: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async findUnique(id: number): Promise<ResponseInterface<Business[]>> {
    const data = await this.dbService.business.findMany({
      where: {
        id: id,
      },
      include: {
        users: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async createData(data: any) {
    const returnData = await this.dbService.business.create({
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async updateData(id: number, data: any) {
    const returnData = await this.dbService.business.update({
      where: {
        id,
      },
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async deleteData(id: number) {
    const returnData = await this.dbService.business.delete({
      where: {
        id,
      },
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async businessAll(): Promise<ResponseInterface<BusinessAll[]>> {
    const data = await this.dbService.business.findMany({
      include: {
        users: {},
        clients: {
          include: {
            quotation: {},
          },
        },
      },
    });
    return this.success(data, { message: 'Ok' });
  }
}
