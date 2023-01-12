import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemQuote } from 'src/shared/interfaces/itemQuote.interface';

@Injectable()
export class ItemQuoteUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<ItemQuote[]> {
    return await this.dbService.itemsQuotes.findMany();
  }

  async findUnique(id: number): Promise<ItemQuote[]> {
    return await this.dbService.itemsQuotes.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.itemsQuotes.create({
      data,
    });
  }

  async updateData(quotes_id: number, data: any) {
    return await this.dbService.itemsQuotes.update({
      where: {
        quotes_id: quotes_id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.itemsQuotes.delete({
      where: {
        quotes_id: id,
      },
    });
  }
}
