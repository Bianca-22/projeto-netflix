import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmesServer;
    constructor(filmesServer: FilmesService);
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    findMany(): Promise<Filme[]>;
    delete(id: string): Promise<Filme>;
    update(updateFilme: CreateFilmeDto, id: number): Promise<Filme>;
}
