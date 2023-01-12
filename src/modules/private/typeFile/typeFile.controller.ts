import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { TypeFileDto } from '@shared/dto/typeFile.dto';
import { TypeFileUseCases } from './typeFile.use-cases';

@Controller()
export class TypeFileController {
  constructor(private typeFileUseCases: TypeFileUseCases) {}

  @Get()
  async typeFile() {
    return await this.typeFileUseCases.findAll();
  }
  @Get()
  async typeFileUnique(@Param('id') id: number) {
    return await this.typeFileUseCases.findUnique(id);
  }

  @Post()
  async createTypeFile(@Body() body: TypeFileDto) {
    return await this.typeFileUseCases.createData(body);
  }

  @Put('/:id')
  async updateTypeFile(@Param('id') id : number, @Body() body: TypeFileDto) {
    return await this.typeFileUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteTypeFile(@Param('id') id : number) {
    return await this.typeFileUseCases.deleteData(id)
  }
}
