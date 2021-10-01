import { PrismaService } from 'src/prisma/prisma.service';
import { Genero, Prisma } from '.prisma/client';
export declare class GenerosService {
    private prisma;
    constructor(prisma: PrismaService);
    createGenero(data: Prisma.GeneroCreateInput): Promise<Genero>;
    getAll(): Promise<Genero[]>;
    deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    updateOneGenero(generoId: number, data: Prisma.GeneroCreateInput): Promise<Genero>;
}
