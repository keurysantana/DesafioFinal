# Desafio Final Cappacita Dev 

## :clapper: Descrição do desafio:

Após cinco módulos de muito aprendizado chegamos ao desafio final, o qual consistiu em criar uma interface gráfica na qual o site retornava as informações do The Movie date base (TMDb). O TMDb é uma base de dados gratuita e de código aberto sobre filmes e séries de TV.

O processo criativo foi do back-end ao front-end aplicando todo conhecimento que adquirimos nas aulas, monitorias e material complementar.

As APIS do TMDB utilizadas foram :

- [Search TV Show](https://developers.themoviedb.org/3/search/search-tv-shows) - /search/tv
- [TV Get Details](https://developers.themoviedb.org/3/tv/get-tv-details) - /tv/{tv_id}

## :white_check_mark:  Requisitos:

:large_blue_circle: NodeJs

:large_blue_circle: VS Code ou outra IDE.

:large_blue_circle: MySQL

## Como executar:

### .env

É necessário preencher o arquivo .env com uma api_key válida para o TMDB. Favor olhar .env.example.

### Banco de dados

É esperado que tenha funcionando MySql em localhost. O script para criar o banco de dados está no arquivo banco/tmdb-schema.sql.

### Node

A partir do repositório back, executar o comando:
`npm run dev`

### Ver o site funcionando

Após correta configuração do banco de dados e do Node funcionando, basta abrir qualquer navegador e acessar a URL http://127.0.0.1:5500/front/index.html