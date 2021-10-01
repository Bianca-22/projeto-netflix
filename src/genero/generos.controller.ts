import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { GenerosService } from './generos.service';
import { Genero } from '.prisma/client';

@Controller('generos')
export class GenerosController {
  constructor(private generosServer: GenerosService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<Genero> {
    return this.generosServer.createGenero(createGenero);
  }

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generosServer.getAll();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generosServer.deleteOneGenero({ id: Number(id) });
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateGenero: CreateGeneroDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Genero> {
    return this.generosServer.updateOneGenero(id, updateGenero);
  }
}
