import { IsNotEmpty } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;
}