<p align="center">
  <a target="blank"><img src="https://t.ctcdn.com.br/VdF2W8d2MbUD5pd4fxgj-jCUxWk=/61x35:1178x663/1117x628/smart/i371122.jpeg" width="320" alt="Netflix Logo" /></a>
</p>

## Descrição do projeto
Essa API foi inspirada na plataforma de streaming Netflix, feita para armazenar os filmes, os participantes do filme e o genero do filme.

Foi utilizado Typescript, NestJs e o banco de dados do MySQL. Foram criadas 3 (três) tabelas no banco MySQL que tem o relacionamento OneToMany.

## Executando o Projeto
* Para instalar as dependencias do projeto execute o seguinte comando:
```bash
$ npm install
```

* Para executar o projeto você pode usar um dos seguintes comando:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

* Comando para teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Testando a API

Você pode utilizar as segintes ferramentas:

* Insomnia
* Thunder Client (plugin no vsCode)

Exemplos de URLs:
>O projeto contém 3 (três) rotas para filmes, participantes e generos. Para editar, apagar ou listar é só você por os nomes correntamente como nos exemplos abaixo.

* Para listar: http://localhost:3000/filmes/list
* Para editar por ID, insira o ID na URL: http://localhost:3000/generos/update/3
* Para apagar por ID, insira o ID na URL: http://localhost:3000/participantes/delete/5

## Estruturas para fazer POST e PUT
Estrutura para a rota filmes:
```json
{
  "nome": "DeadPool",
  "imagem": "https://t2.tudocdn.net/307472?w=1200&h=900",
  "lancamento": "2016",
  "duracao": "1h 48m",
  "generoId": "1",
  "partId": "1"
}
```

Estrutura para a rota participantes:
```json
  {
    "nome": "Ryan Reynolds",
    "imagem": "https://www.lance.com.br/files/article_main/uploads/2020/11/16/5fb29dadd96d8.jpeg",
    "dataNasc": "23/10/1976"
  }
```

Estrutura para a rota generos:
```json
  {
    "nome": "Comédia"
  }
```

## Obrigado por testar e utilizar minha API, volte sempre!
