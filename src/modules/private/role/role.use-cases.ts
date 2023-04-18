import { ResponseClass } from '@cross';
import { Injectable } from '@nestjs/common';
import { ResponseInterface } from '@shared';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/shared/interfaces/role.interface';

@Injectable()
export class RolesUseCases extends ResponseClass {
  constructor(private dbService: PrismaService) {
    super();
  }

  async findAll(): Promise<ResponseInterface<Role[]>> {
    const data = await this.dbService.roles.findMany();
    return this.success(data, { message: 'Ok' });
  }

  async findUnique(id: number): Promise<ResponseInterface<Role[]>> {
    const data = await this.dbService.roles.findMany({
      where: {
        id: id,
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async createData(data: any) {
    const returnData = await this.dbService.roles.create({
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async updateData(id: number, data: any) {
    const returnData = await this.dbService.roles.update({
      where: {
        id: id,
      },
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async deleteData(id: number) {
    const returnData = await this.dbService.roles.delete({
      where: {
        id: id,
      },
    });
    return this.success(returnData, { message: 'Ok' });
  }
}
