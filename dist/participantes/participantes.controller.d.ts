import { CreateParticipanteDto } from './dto/create-participante.dto';
import { ParticipantesService } from './participantes.service';
import { Participantes } from '.prisma/client';
export declare class ParticipantesController {
    private participantesServer;
    constructor(participantesServer: ParticipantesService);
    create(createParticipante: CreateParticipanteDto): Promise<Participantes>;
    findMany(): Promise<Participantes[]>;
    delete(id: string): Promise<Participantes>;
    update(updateParticipante: CreateParticipanteDto, id: number): Promise<Participantes>;
}
