import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

  async updateOneFilme(
    filmeId: number,
    data: Prisma.FilmeCreateInput,
  ): Promise<Filme> {
    return this.prisma.filme.update({
      data,
      where: {
        id: filmeId,
      },
    });
  }
}
