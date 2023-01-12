import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Quote } from 'src/shared/interfaces/quote.interface';

@Injectable()
export class QuoteUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<Quote[]> {
    return await this.dbService.quotes.findMany({
      include: {
        ItemsQuotes: {},
      },
    });
  }

  async findUnique(id: number): Promise<Quote[]> {
    return await this.dbService.quotes.findMany({
      where: {
        id: id,
      },
      include: {
        ItemsQuotes: {},
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.quotes.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.quotes.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.quotes.delete({
      where: {
        id: id,
      },
    });
  }
}
