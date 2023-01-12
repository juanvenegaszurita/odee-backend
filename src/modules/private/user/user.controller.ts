import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { UserDto } from '@shared/dto/user.dto';
import { UserUseCases } from './user.use-cases';

@Controller()
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async user() {
    return await this.userUseCases.findAll();
  }
  @Get()
  async userUnique(@Param('id') id: number) {
    return await this.userUseCases.findUnique(id);
  }

  @Post()
  async createUser(@Body() body: UserDto) {
    return await this.userUseCases.createData(body);
  }

  @Put('/:id')
  async updateUser(@Param('id') id: number, @Body() body: UserDto) {
    return await this.userUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.userUseCases.deleteData(id);
  }
}
