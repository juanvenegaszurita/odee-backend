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
import { ProdServDto } from '@shared/dto/prodServ.dto';
import { ProdServUseCases } from './prodServ.use-cases';

@Controller('ProdServ')
export class ProdServController {
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
  async createProdServ(@Body(new ValidationPipe()) body: ProdServDto) {
    return await this.prodServUseCases.createData(body);
  }

  @Put('/:id')
  async updateProdServ(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: ProdServDto,
  ) {
    delete body['id'];
    return await this.prodServUseCases.updateData(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteProdServ(@Param('id') id: number) {
    return await this.prodServUseCases.deleteData(id);
  }
}
