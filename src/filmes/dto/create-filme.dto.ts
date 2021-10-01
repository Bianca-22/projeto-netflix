import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  lancamento: string;

  @IsNotEmpty()
  duracao: string;

  @IsNotEmpty()
  generoId: string;

  @IsNotEmpty()
  partId: string;
}