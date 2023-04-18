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

@Controller('Clients')
export class ClientController {
  constructor(private clientUseCases: ClientUseCases) {}

  @Get()
  async client() {
    return await this.clientUseCases.findAll();
  }
  @Get('/:id')
  async clientUnique(@Param('id') id: string) {
    return await this.clientUseCases.findUnique(parseInt(id));
  }

  @Post()
  async createClient(@Body() body: ClientDto) {
    return await this.clientUseCases.createData(body);
  }

  @Put('/:id')
  async updateClient(@Param('id') id: string, @Body() body: ClientDto) {
    delete body['id'];
    body['business_id'] = parseInt(`${body['business_id']}`);
    return await this.clientUseCases.updateData(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: string) {
    return await this.clientUseCases.deleteData(parseInt(id));
  }
}
