import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Quotation } from 'src/shared/interfaces/quotation.interface';

@Injectable()
export class QuotationUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<Quotation[]> {
    return await this.dbService.quotation.findMany({
      include: {
        ItemsQuotation: {},
      },
    });
  }

  async findUnique(id: number): Promise<Quotation[]> {
    return await this.dbService.quotation.findMany({
      where: {
        id: id,
      },
      include: {
        ItemsQuotation: {},
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.quotation.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.quotation.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.quotation.delete({
      where: {
        id: id,
      },
    });
  }
}
