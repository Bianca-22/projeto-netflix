import { PrismaService } from 'src/prisma/prisma.service';
import { Participantes, Prisma } from '.prisma/client';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    createParticipante(data: Prisma.ParticipantesCreateInput): Promise<Participantes>;
    getAll(): Promise<Participantes[]>;
    deleteOneParticipante(where: Prisma.ParticipantesWhereUniqueInput): Promise<Participantes>;
    updateOneParticipante(filmeId: number, data: Prisma.ParticipantesCreateInput): Promise<Participantes>;
}
