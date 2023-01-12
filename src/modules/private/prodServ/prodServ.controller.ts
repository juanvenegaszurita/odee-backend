import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { ProdServDto } from '@shared/dto/prodServ.dto';
import { ProdServUseCases } from './prodServ.use-cases';

@Controller()
export class ProvServController {
  constructor(private prodServUseCases: ProdServUseCases) {}

  @Get()
  async prodServ() {
    return await this.prodServUseCases.findAll();
  }
  @Get()
  async prodServUnique(@Param('id') id: number) {
    return await this.prodServUseCases.findUnique(id);
  }

  @Post()
  async createProdServ(@Body() body: ProdServDto) {
    return await this.prodServUseCases.createData(body);
  }

  @Put('/:id')
  async updateProdServ(@Param('id') id : number, @Body() body: ProdServDto) {
    return await this.prodServUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteProdServ(@Param('id') id : number) {
    return await this.prodServUseCases.deleteData(id)
  }
}
