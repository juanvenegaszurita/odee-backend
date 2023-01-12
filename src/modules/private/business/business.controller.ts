import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { BusinessDto } from 'src/shared/dto/business.dto';
import { BusinessUseCases } from './business.use-cases';

@Controller()
export class BusinessController {
  constructor(private businessUseCases: BusinessUseCases) {}

  @Get()
  async business() {
    return await this.businessUseCases.findAll();
  }
  @Get()
  async businessUnique(@Param('id') id: number) {
    return await this.businessUseCases.findUnique(id);
  }

  @Post()
  async createBusiness(@Body() body: BusinessDto) {
    return await this.businessUseCases.createData(body);
  }

  @Put('/:id')
  async updateBusiness(@Param('id') id : number, @Body() body: BusinessDto) {
    return await this.businessUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteBusiness(@Param('id') id : number) {
    return await this.businessUseCases.deleteData(id)
  }
}
