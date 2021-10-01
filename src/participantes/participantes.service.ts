import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Participantes, Prisma } from '.prisma/client';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async createParticipante(
    data: Prisma.ParticipantesCreateInput,
  ): Promise<Participantes> {
    return this.prisma.participantes.create({ data });
  }

  async getAll(): Promise<Participantes[]> {
    return this.prisma.participantes.findMany();
  }

  async deleteOneParticipante(
    where: Prisma.ParticipantesWhereUniqueInput,
  ): Promise<Participantes> {
    return this.prisma.participantes.delete({ where });
  }

  async updateOneParticipante(
    filmeId: number,
    data: Prisma.ParticipantesCreateInput,
  ): Promise<Participantes> {
    return this.prisma.participantes.update({
      data,
      where: {
        id: filmeId,
      },
    });
  }
}