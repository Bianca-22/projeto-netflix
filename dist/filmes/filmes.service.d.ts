import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    createFilme(data: Prisma.FilmeCreateInput): Promise<Filme>;
    getAll(): Promise<Filme[]>;
    deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    updateOneFilme(filmeId: number, data: Prisma.FilmeCreateInput): Promise<Filme>;
}
