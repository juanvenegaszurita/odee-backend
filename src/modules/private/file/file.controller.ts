import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common/decorators';
import { FileDto } from '@shared/dto/file.dto';
import { FileUseCases } from './file.use-cases';

@Controller()
export class FileController {
  constructor(private fileUseCases: FileUseCases) {}

  @Get()
  async file() {
    return await this.fileUseCases.findAll();
  }
  @Get()
  async fileUnique(@Param('id') id: number) {
    return await this.fileUseCases.findUnique(id);
  }

  @Post()
  async createFile(@Body() body: FileDto) {
    return await this.fileUseCases.createData(body);
  }

  @Put('/:id')
  async updateFile(@Param('id') id : number, @Body() body: FileDto) {
    return await this.fileUseCases.updateData(id, body);
  }

  @Delete('/:id')
  async deleteFile(@Param('id') id : number) {
    return await this.fileUseCases.deleteData(id)
  }
}
