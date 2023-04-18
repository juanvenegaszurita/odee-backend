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
import { FileDto } from '@shared/dto/file.dto';
import { FileUseCases } from './file.use-cases';

@Controller('File')
export class FileController {
  constructor(private fileUseCases: FileUseCases) {}

  @Get()
  async file() {
    return await this.fileUseCases.findAll();
  }
  @Get('/:id')
  async fileUnique(@Param('id') id: string) {
    return await this.fileUseCases.findUnique(parseInt(id));
  }

  @Post()
  async createFile(@Body(new ValidationPipe()) body: FileDto) {
    return await this.fileUseCases.createData(body);
  }

  @Put('/:id')
  async updateFile(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: FileDto,
  ) {
    delete body['id'];
    body['typeFile_id'] = parseInt(`${body['typeFile_id']}`);
    return await this.fileUseCases.updateData(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteFile(@Param('id') id: string) {
    return await this.fileUseCases.deleteData(parseInt(id));
  }
}
