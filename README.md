# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

# Adonis.Js - Node.Js

### Comandos iniciais do framework

Instalando o adonis de forma global:
```
npm install -g @adonisjs/cli
```
Cria novo projeto (a flag --api-only retira a parte das views):
```
adonis new nomeProjeto --api-only
```
Roda o servidor:
```
adonis serve --dev
```
O próximo passo é instalar a dependência do banco de dados:
```
npm install mysql2 ou pg(postgress)
```
Por fim, configurar o arquivo .env com as informações do banco de dados.

### Comandos para o projeto

Executa as migrations
```
adonis migration:run
```
Cria novos controllers
```
adonis make:controller nomeController
```

## Alguns termos importantes

#### express
é uma biblioteca que cria o servidor, adiciona funcionalidades http (rotas e etc.) [ index.js ]

comando que cria toda estrutura de um projeto express (com views)
```
install express-generator -g
```

#### nodemon
Ferramenta que fica ouvindo os arquivos do projeto e reinicia o servidor do express sempre que o código for alterado.

#### consign
Agrupa as rotas para o app (referencia a pasta que está os controllers, arquivos que definem a rota e introduz os módulos no app, variável que recebe o express)[ /config/customExpress.js ]

