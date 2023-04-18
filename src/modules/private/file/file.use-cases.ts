import { ResponseClass } from '@cross';
import { Injectable } from '@nestjs/common';
import { ResponseInterface } from '@shared';
import { PrismaService } from 'src/prisma/prisma.service';
import { File } from 'src/shared/interfaces/file.interface';

@Injectable()
export class FileUseCases extends ResponseClass {
  constructor(private dbService: PrismaService) {
    super();
  }

  async findAll(): Promise<ResponseInterface<File[]>> {
    const data = await this.dbService.file.findMany({
      include: {
        typeFile: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async findUnique(id: number): Promise<ResponseInterface<File[]>> {
    const data = await this.dbService.file.findMany({
      where: {
        id: id,
      },
      include: {
        typeFile: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async createData(data: any) {
    const returnData = await this.dbService.file.create({
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async updateData(id: number, data: any) {
    const returnData = await this.dbService.file.update({
      where: {
        id: id,
      },
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async deleteData(id: number) {
    const returnData = await this.dbService.file.delete({
      where: {
        id: id,
      },
    });
    return this.success(returnData, { message: 'Ok' });
  }
}
