import { ResponseClass } from '@cross';
import { Injectable } from '@nestjs/common';
import { ResponseInterface } from '@shared';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/shared/interfaces/role.interface';

@Injectable()
export class UserUseCases extends ResponseClass {
  constructor(private dbService: PrismaService) {
    super();
  }

  async findAll(): Promise<ResponseInterface<Role[]>> {
    const data = await this.dbService.users.findMany({
      include: {
        roles: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async findUnique(id: number): Promise<ResponseInterface<Role[]>> {
    const data = await this.dbService.users.findMany({
      where: {
        id: id,
      },
      include: {
        roles: {},
      },
    });
    return this.success(data, { message: 'Ok' });
  }

  async createData(data: any) {
    data.UID = 'ascacasc';
    const returnData = await this.dbService.users.create({
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async updateData(id: number, data: any) {
    const returnData = await this.dbService.users.update({
      where: {
        id: id,
      },
      data,
    });
    return this.success(returnData, { message: 'Ok' });
  }

  async deleteData(id: number) {
    const returnData = await this.dbService.users.delete({
      where: {
        id: id,
      },
    });
    return this.success(returnData, { message: 'Ok' });
  }
}
