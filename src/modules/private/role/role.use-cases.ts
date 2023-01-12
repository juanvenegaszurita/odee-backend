import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/shared/interfaces/role.interface';

@Injectable()
export class RolesUseCases {
  constructor(private dbService: PrismaService) {}

  async findAll(): Promise<Role[]> {
    return await this.dbService.roles.findMany();
  }

  async findUnique(id: number): Promise<Role[]> {
    return await this.dbService.roles.findMany({
      where: {
        id: id,
      },
    });
  }

  async createData(data: any) {
    return await this.dbService.roles.create({
      data,
    });
  }

  async updateData(id: number, data: any) {
    return await this.dbService.roles.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteData(id: number) {
    return await this.dbService.roles.delete({
      where: {
        id: id,
      },
    });
  }
}
