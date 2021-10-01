import { CreateGeneroDto } from './dto/create-genero.dto';
import { GenerosService } from './generos.service';
import { Genero } from '.prisma/client';
export declare class GenerosController {
    private generosServer;
    constructor(generosServer: GenerosService);
    create(createGenero: CreateGeneroDto): Promise<Genero>;
    findMany(): Promise<Genero[]>;
    delete(id: string): Promise<Genero>;
    update(updateGenero: CreateGeneroDto, id: number): Promise<Genero>;
}
