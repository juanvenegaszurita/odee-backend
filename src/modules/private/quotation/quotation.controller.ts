import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { QuotationDto } from '@shared/dto/quotation.dto';
import { QuotationUseCases } from './quotation.use-cases';

@Controller()
export class QuotationController {
  constructor(private quotationUseCases: QuotationUseCases) {}

  @Get()
  async quotation() {
    return await this.quotationUseCases.findAll();
  }
  @Get()
  async quotationUnique(@Param('id') id: number) {
    return await this.quotationUseCases.findUnique(id);
  }

  @Post()
  async createquotation(@Body() body: QuotationDto) {
    return await this.quotationUseCases.createData(body);
  }

  @Put('/:id')
  async updatequotation(@Param('id') id: number, @Body() body: QuotationDto) {
    return await this.quotationUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deletequotation(@Param('id') id: number) {
    return await this.quotationUseCases.deleteData(id);
  }
}
