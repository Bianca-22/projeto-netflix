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
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { ParticipantesService } from './participantes.service';
import { Participantes } from '.prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private participantesServer: ParticipantesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createParticipante: CreateParticipanteDto,
  ): Promise<Participantes> {
    return this.participantesServer.createParticipante(createParticipante);
  }

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Participantes[]> {
    return this.participantesServer.getAll();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participantesServer.deleteOneParticipante({ id: Number(id) });
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateParticipante: CreateParticipanteDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participantes> {
    return this.participantesServer.updateOneParticipante(
      id,
      updateParticipante,
    );
  }
}
