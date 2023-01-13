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
import { TypeFileDto } from '@shared/dto/typeFile.dto';
import { TypeFileUseCases } from './typeFile.use-cases';

@Controller('TypeFile')
export class TypeFileController {
  constructor(private typeFileUseCases: TypeFileUseCases) {}

  @Get()
  async typeFile() {
    return await this.typeFileUseCases.findAll();
  }
  @Get()
  async typeFileUnique(@Param('id') id: string) {
    return await this.typeFileUseCases.findUnique(parseInt(id));
  }

  @Post()
  async createTypeFile(@Body(new ValidationPipe()) body: TypeFileDto) {
    return await this.typeFileUseCases.createData(body);
  }

  @Put('/:id')
  async updateTypeFile(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: TypeFileDto,
  ) {
    delete body['id'];
    return await this.typeFileUseCases.updateData(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteTypeFile(@Param('id') id: string) {
    return await this.typeFileUseCases.deleteData(parseInt(id));
  }
}
