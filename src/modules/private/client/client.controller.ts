import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { ClientDto } from '@shared/dto/client.dto';
import { ClientUseCases } from './client.use-cases';

@Controller()
export class ClientController {
  constructor(private clientUseCases: ClientUseCases) {}

  @Get()
  async client() {
    return await this.clientUseCases.findAll();
  }
  @Get()
  async clientUnique(@Param('id') id: number) {
    return await this.clientUseCases.findUnique(id);
  }

  @Post()
  async createClient(@Body() body: ClientDto) {
    return await this.clientUseCases.createData(body);
  }

  @Put('/:id')
  async updateClient(@Param('id') id : number, @Body() body: ClientDto) {
    return await this.clientUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id : number) {
    return await this.clientUseCases.deleteData(id)
  }
}
