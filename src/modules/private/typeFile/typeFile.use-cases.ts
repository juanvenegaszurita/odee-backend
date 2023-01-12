import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeFile } from 'src/shared/interfaces/typeFile.interface';

@Injectable()
export class TypeFileUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<TypeFile[]> {
    return await this.dbService.typeFile.findMany();
  }

  async findUnique(id: number): Promise<TypeFile[]> {
    return await this.dbService.typeFile.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.typeFile.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.typeFile.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.typeFile.delete({
      where: {
        id: id,
      },
    });
  }
}
