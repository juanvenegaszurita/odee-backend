import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { ItemsQuotationDto } from '@shared/dto/itemsQuotation.dto';
import { ItemsQuotationUseCases } from './itemsQuotation.use-cases';

@Controller()
export class ItemsQuotationController {
  constructor(private itemsQuotationUseCases: ItemsQuotationUseCases) {}

  @Get()
  async itemQuote() {
    return await this.itemsQuotationUseCases.findAll();
  }
  @Get()
  async itemQuoteUnique(@Param('id') id: number) {
    return await this.itemsQuotationUseCases.findUnique(id);
  }

  @Post()
  async createItemQuote(@Body() body: ItemsQuotationDto) {
    return await this.itemsQuotationUseCases.createData(body);
  }

  @Put('/:id')
  async updateItemQuote(
    @Param('id') id: number,
    @Body() body: ItemsQuotationDto,
  ) {
    return await this.itemsQuotationUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteItemQuote(@Param('id') id: number) {
    return await this.itemsQuotationUseCases.deleteData(id);
  }
}
