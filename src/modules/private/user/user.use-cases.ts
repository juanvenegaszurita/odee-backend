import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/shared/interfaces/role.interface';

@Injectable()
export class UserUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<Role[]> {
    return await this.dbService.users.findMany();
  }

  async findUnique(id: number): Promise<Role[]> {
    return await this.dbService.users.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.users.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.users.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.users.delete({
      where: {
        id: id,
      },
    });
  }
}
