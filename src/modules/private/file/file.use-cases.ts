import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { File } from 'src/shared/interfaces/file.interface';

@Injectable()
export class FileUseCases {
  constructor(private dbService : PrismaService) {}

  async findAll(): Promise<File[]> {
    return await this.dbService.file.findMany();
  }
  
  async findUnique(id: number): Promise<File[]> {
    return await this.dbService.file.findMany({
      where: {
        id: id,
      },
    });
  }
  
  async createData(
    data: any
  ) {
    return await this.dbService.file.create({
      data,
    });
  }
  
  async updateData(
    id: number,
    data: any
  ) {
    return await this.dbService.file.update({
      where: {
        id: id,
      },
      data,
    });
  }
  
  async deleteData(id: number) {
    return await this.dbService.file.delete({
      where: {
        id: id,
      },
    });
  }

}

