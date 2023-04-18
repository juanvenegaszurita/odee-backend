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
import { BusinessAll, ResponseInterface } from '@shared';
import { BusinessDto } from 'src/shared/dto/business.dto';
import { BusinessUseCases } from './business.use-cases';

@Controller('Business')
export class BusinessController {
  constructor(private businessUseCases: BusinessUseCases) {}

  @Get()
  async business() {
    return await this.businessUseCases.findAll();
  }

  @Get('/:id')
  async businessUnique(@Param('id') id: string) {
    return await this.businessUseCases.findUnique(parseInt(id));
  }

  @Post()
  async createBusiness(@Body(new ValidationPipe()) body: BusinessDto) {
    return await this.businessUseCases.createData(body);
  }

  @Put('/:id')
  async updateBusiness(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: BusinessDto,
  ) {
    delete body['id'];
    body['users_id'] = parseInt(`${body['users_id']}`);
    return await this.businessUseCases.updateData(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteBusiness(@Param('id') id: string) {
    return await this.businessUseCases.deleteData(parseInt(id));
  }

  @Get('get/All')
  async businessAll(): Promise<ResponseInterface<BusinessAll[]>> {
    return await this.businessUseCases.businessAll();
  }
}
