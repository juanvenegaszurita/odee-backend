import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { ItemQuoteDto } from '@shared/dto/itemQuote.dto';
import { ItemQuoteUseCases } from './itemQuote.use-cases';

@Controller()
export class ItemQuoteController {
  constructor(private itemQuoteUseCases: ItemQuoteUseCases) {}

  @Get()
  async itemQuote() {
    return await this.itemQuoteUseCases.findAll();
  }
  @Get()
  async itemQuoteUnique(@Param('id') id: number) {
    return await this.itemQuoteUseCases.findUnique(id);
  }

  @Post()
  async createItemQuote(@Body() body: ItemQuoteDto) {
    return await this.itemQuoteUseCases.createData(body);
  }

  @Put('/:id')
  async updateItemQuote(@Param('id') id: number, @Body() body: ItemQuoteDto) {
    return await this.itemQuoteUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteItemQuote(@Param('id') id: number) {
    return await this.itemQuoteUseCases.deleteData(id);
  }
}
