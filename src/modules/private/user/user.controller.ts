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
import { UserDto } from '@shared/dto/user.dto';
import { UserUseCases } from './user.use-cases';

@Controller('User')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async user() {
    return await this.userUseCases.findAll();
  }
  @Get()
  async userUnique(@Param('id') id: string) {
    return await this.userUseCases.findUnique(parseInt(id));
  }

  @Post()
  async createUser(@Body(new ValidationPipe()) body: UserDto) {
    body['roles_id'] = parseInt(`${body['roles_id']}`);
    return await this.userUseCases.createData(body);
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: UserDto,
  ) {
    delete body['id'];
    body['roles_id'] = parseInt(`${body['roles_id']}`);
    return await this.userUseCases.updateData(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.userUseCases.deleteData(parseInt(id));
  }
}
