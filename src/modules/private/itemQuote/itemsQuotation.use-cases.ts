import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemsQuotation } from 'src/shared/interfaces/itemsQuotation.interface';

@Injectable()
export class ItemsQuotationUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<ItemsQuotation[]> {
    return await this.dbService.itemsQuotation.findMany();
  }

  async findUnique(id: number): Promise<ItemsQuotation[]> {
    return await this.dbService.itemsQuotation.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.itemsQuotation.create({
      data,
    });
  }

  async updateData(quotation_id: number, data: any) {
    return await this.dbService.itemsQuotation.update({
      where: {
        quotation_id: quotation_id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.itemsQuotation.delete({
      where: {
        quotation_id: id,
      },
    });
  }
}
