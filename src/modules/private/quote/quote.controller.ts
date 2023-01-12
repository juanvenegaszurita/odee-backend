import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { QuoteDto } from '@shared/dto/quote.dto';
import { QuoteUseCases } from './quote.use-cases';

@Controller()
export class QuoteController {
  constructor(private quoteUseCases: QuoteUseCases) {}

  @Get()
  async quote() {
    return await this.quoteUseCases.findAll();
  }
  @Get()
  async quoteUnique(@Param('id') id: number) {
    return await this.quoteUseCases.findUnique(id);
  }

  @Post()
  async createQuote(@Body() body: QuoteDto) {
    return await this.quoteUseCases.createData(body);
  }

  @Put('/:id')
  async updateQuote(@Param('id') id : number, @Body() body: QuoteDto) {
    return await this.quoteUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteQuote(@Param('id') id : number) {
    return await this.quoteUseCases.deleteData(id)
  }
}
