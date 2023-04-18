import { ValidationPipe } from '@cross';
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

@Controller('Role')
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
  async createRole(@Body(new ValidationPipe()) body: RoleDto) {
    return await this.roleUseCases.createData(body);
  }

  @Put('/:id')
  async updateRole(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: RoleDto,
  ) {
    delete body['id'];
    return await this.roleUseCases.updateData(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteRole(@Param('id') id: string) {
    return await this.roleUseCases.deleteData(parseInt(id));
  }
}
