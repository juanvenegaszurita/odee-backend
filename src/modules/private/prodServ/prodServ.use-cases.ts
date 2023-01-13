import { ResponseClass } from '@cross';
import { Injectable } from '@nestjs/common';
import { ResponseInterface } from '@shared';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdServ } from 'src/shared/interfaces/prodServ.interface';

@Injectable()
export class ProdServUseCases extends ResponseClass {
  constructor(private dbService: PrismaService) {
    super();
  }

  async findAll(): Promise<ResponseInterface<ProdServ[]>> {
    const data = await this.dbService.prodServ.findMany();
    return this.success(data, { message: 'Ok' });
  }

  async findUnique(id: number): Promise<ResponseInterface<ProdServ[]>> {
    const data = await this.dbService.prodServ.findMany({
      where: {
        id: id,
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async createData(data: any) {
    const returnData = await this.dbService.prodServ.create({
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async updateData(id: number, data: any) {
    console.log(id, data);
    const returnData = await this.dbService.prodServ.update({
      where: {
        id: id,
      },
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async deleteData(id: number) {
    const returnData = await this.dbService.prodServ.delete({
      where: {
        id: id,
      },
    });
    return this.success(returnData, { message: 'Ok' });
  }
}
