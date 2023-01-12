import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdServ } from 'src/shared/interfaces/prodServ.interface';

@Injectable()
export class ProdServUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<ProdServ[]> {
    return await this.dbService.prodServ.findMany();
  }

  async findUnique(id: number): Promise<ProdServ[]> {
    return await this.dbService.prodServ.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.prodServ.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.prodServ.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.prodServ.delete({
      where: {
        id: id,
      },
    });
  }
}
