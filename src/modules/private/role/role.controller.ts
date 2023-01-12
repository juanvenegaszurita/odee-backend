import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { RoleDto } from '@shared/dto/role.dto';
import { RolesUseCases } from './role.use-cases';

@Controller()
export class RoleController {
  constructor(private roleUseCases: RolesUseCases) {}

  @Get()
  async role() {
    return await this.roleUseCases.findAll();
  }
  @Get()
  async roleUnique(@Param('id') id: number) {
    return await this.roleUseCases.findUnique(id);
  }

  @Post()
  async createRole(@Body() body: RoleDto) {
    return await this.roleUseCases.createData(body);
  }

  @Put('/:id')
  async updateRole(@Param('id') id : number, @Body() body: RoleDto) {
    return await this.roleUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteRole(@Param('id') id : number) {
    return await this.roleUseCases.deleteData(id)
  }
}
