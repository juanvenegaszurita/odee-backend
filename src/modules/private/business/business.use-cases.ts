import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Business } from 'src/shared/interfaces/business.interface';

@Injectable()
export class BusinessUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<Business[]> {
    return await this.dbService.business.findMany();
  }

  async findUnique(id: number): Promise<Business[]> {
    return await this.dbService.business.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.business.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.business.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteData(id: number) {
    return await this.dbService.business.delete({
      where: {
        id,
      },
    });
  }
}
