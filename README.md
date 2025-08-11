# API Restful Azpie

RESTful API para autenticação de usuários e acesso protegido a dashboard financeira.

## Tecnologias

- Node.js  
- Express  
- JSON Web Token (JWT)  
- Prisma ORM  
- MongoDB  
- Bcrypt  
- Cors  
- Dotenv  

## Estrutura do Projeto

```
.
├── prisma/               # Migrations e esquema do banco
├── src/                  # Código-fonte da API
│   ├── controllers/      # Controladores das rotas
│   ├── middlewares/      # Middlewares (ex: autenticação)
│   ├── routes/           # Definição das rotas
│   └── server.js         # Arquivo principal do servidor
├── .env                  # Variáveis de ambiente (não versionado)
├── package.json
├── package-lock.json
└── .gitignore
```

## Configuração

1. Clone o repositório:

```bash
git clone https://github.com/pontesBernardo/azpie-api-restful.git
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz com as variáveis necessárias, por exemplo:

```
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Execute as migrations do Prisma (caso use migrations):

```bash
npx prisma migrate dev
```

5. Inicie a API:

- Em modo desenvolvimento (com reload automático):

```bash
npm run dev
```

- Em produção:

```bash
npm start
```

## Rotas principais

| Método | Endpoint      | Protegido? | Descrição                      |
|--------|---------------|------------|-------------------------------|
| POST   | `/register`   | Não        | Cria um novo usuário           |
| POST   | `/login`      | Não        | Autentica usuário e retorna JWT|
| GET    | `/dashboard`  | Sim        | Acesso à dashboard protegida   |

## Testes

Use o Thunder Client, Postman ou Insomnia para testar as rotas.  
Lembre de enviar o header `Authorization: Bearer <token>` nas rotas protegidas.

---

## Contato

Discord: sr.shadd#8369

