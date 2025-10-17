# 🚀 Sistema de Cadastro de Usuários - Fullstack

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

> Aplicação completa de gerenciamento de usuários desenvolvida com Node.js, React e MongoDB. Sistema fullstack moderno que demonstra a integração entre front-end e back-end através de uma API RESTful.

## 📸 Screenshots

![Aplicação em funcionamento](./img/web.png)

*Interface moderna com formulário de cadastro e listagem de usuários*

---

## 📋 Sobre o Projeto

Este projeto consiste em uma aplicação fullstack completa que permite criar, listar, editar e deletar usuários. Foi desenvolvido seguindo boas práticas de programação e arquitetura de software, ideal para quem está aprendendo desenvolvimento web ou precisa de uma base sólida para projetos maiores.

### ✨ Funcionalidades

- ✅ Cadastro de novos usuários (nome, email, idade)
- ✅ Listagem de todos os usuários cadastrados
- ✅ Edição de informações de usuários existentes
- ✅ Exclusão de usuários do sistema
- ✅ Validação de email único no banco de dados
- ✅ Interface responsiva e moderna com gradientes
- ✅ Comunicação em tempo real entre front e back-end
- ✅ Atualização automática da interface após operações

## 🛠️ Tecnologias Utilizadas

### Backend (API)
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web rápido e minimalista
- **Prisma** - ORM moderno para Node.js e TypeScript
- **MongoDB Atlas** - Banco de dados NoSQL em nuvem
- **Thunder Client** - Extensão do VS Code para testes de API

### Frontend
- **React** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e extremamente rápida
- **Axios** - Cliente HTTP baseado em Promises
- **CSS3** - Estilização com gradientes lineares
- **JavaScript ES6+** - Sintaxe moderna (async/await, arrow functions)
- **React Hooks** - useState para gerenciamento de estado

## 📁 Estrutura do Projeto

```
cadastro-usuarios-fullstack/
├── README.md                     # Este arquivo
├── .gitignore                    # Arquivos ignorados pelo Git
├── img/                          # Screenshots do projeto
│   └── web.png                  # Print da aplicação
│
├── backend/                      # API (Node.js + Express)
│   ├── node_modules/
│   ├── prisma/
│   │   └── schema.prisma        # Schema do banco de dados
│   ├── server.js                # Servidor Express principal
│   ├── package.json             # Dependências do backend
│   ├── package-lock.json
│   ├── .env                     # Variáveis de ambiente (NÃO COMMITAR!)
│   └── .env.example             # Template das variáveis
│
└── frontend/                     # Interface React
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── App.jsx              # Componente principal
    │   ├── main.jsx             # Entry point do React
    │   └── index.css            # Estilos globais
    ├── index.html
    ├── package.json             # Dependências do frontend
    ├── package-lock.json
    └── vite.config.js           # Configuração do Vite
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (vem com o Node.js)
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (gratuita)

### 🔧 Configuração do Backend

1. **Clone o repositório**
```bash
git clone <url-do-seu-repositorio>
cd cadastro-usuarios-fullstack
```

2. **Acesse a pasta do backend**
```bash
cd backend
```

3. **Instale as dependências**
```bash
npm install
```

4. **Configure as variáveis de ambiente**

Copie o arquivo `.env.example` para `.env`:
```bash
copy .env.example .env     # Windows
# ou
cp .env.example .env       # Linux/Mac
```

Edite o arquivo `.env` e adicione sua connection string do MongoDB:
```env
DATABASE_URL="mongodb+srv://SEU_USUARIO:SUA_SENHA@seu-cluster.mongodb.net/Users?retryWrites=true&w=majority&appName=Users"
```

**Como obter sua connection string:**
- Acesse [MongoDB Atlas](https://cloud.mongodb.com/)
- Crie um cluster gratuito (se ainda não tiver)
- Clique em "Connect" > "Connect your application"
- Copie a string de conexão
- Substitua `<password>` pela senha do seu usuário

5. **Configure o Prisma e sincronize o banco**
```bash
npx prisma generate
npx prisma db push
```

6. **Inicie o servidor**
```bash
npm start
```

✅ O servidor estará rodando em `http://localhost:3000`

### 💻 Configuração do Frontend

1. **Abra um novo terminal** (mantenha o backend rodando)

2. **Acesse a pasta do frontend**
```bash
cd frontend
```

3. **Instale as dependências**
```bash
npm install
```

4. **Inicie a aplicação React**
```bash
npm run dev
```

✅ A aplicação estará disponível em `http://localhost:5173`

Abra seu navegador e acesse `http://localhost:5173` para usar a aplicação! 🎉

## 📡 Documentação da API

### Endpoints Disponíveis

| Método | Endpoint | Descrição | Body (JSON) |
|--------|----------|-----------|-------------|
| GET | `/usuarios` | Lista todos os usuários | - |
| POST | `/usuarios` | Cria um novo usuário | `{ name, email, age }` |
| PUT | `/usuarios/:id` | Atualiza um usuário | `{ name, email, age }` |
| DELETE | `/usuarios/:id` | Deleta um usuário | - |

### Exemplos de Requisições

#### 📝 Criar Usuário
```http
POST http://localhost:3000/usuarios
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 25
}
```

**Resposta (201 Created):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 25
}
```

#### 📋 Listar Todos os Usuários
```http
GET http://localhost:3000/usuarios
```

**Resposta (200 OK):**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "name": "João Silva",
    "email": "joao@email.com",
    "age": 25
  },
  {
    "id": "507f191e810c19729de860ea",
    "name": "Maria Santos",
    "email": "maria@email.com",
    "age": 30
  }
]
```

#### ✏️ Atualizar Usuário
```http
PUT http://localhost:3000/usuarios/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "name": "João Silva Atualizado",
  "email": "joao.novo@email.com",
  "age": 26
}
```

#### 🗑️ Deletar Usuário
```http
DELETE http://localhost:3000/usuarios/507f1f77bcf86cd799439011
```

**Resposta (200 OK):**
```json
{
  "message": "Usuário deletado com sucesso"
}
```

### Testando a API

Você pode testar os endpoints usando:

- **Thunder Client** (extensão do VS Code) ⚡
- **Postman** - https://www.postman.com/

### Estrutura do Modelo User

| Campo | Tipo | Descrição | Restrições |
|-------|------|-----------|------------|
| `id` | String | Identificador único | Gerado automaticamente (ObjectId) |
| `email` | String | Email do usuário | Único (não permite duplicatas) |
| `name` | String | Nome completo | Obrigatório |
| `age` | Int | Idade do usuário | Obrigatório |

## 🎨 Funcionalidades do Frontend

### Componentes e Recursos

- **Formulário de Cadastro**: Inputs para nome, email e idade
- **Lista Dinâmica**: Renderização automática dos usuários
- **Botões de Ação**: Editar e deletar para cada usuário
- **Estado Reativo**: Interface atualiza automaticamente após operações
- **Estilização Moderna**: Gradiente linear, bordas arredondadas, sombras

### Principais Hooks Utilizados

```javascript
import { useState } from 'react';
import axios from 'axios';

// Estado para armazenar a lista de usuários
const [users, setUsers] = useState([]);

// Função para buscar usuários da API
async function getUsers() {
  const usersFromApi = await axios.get('http://localhost:3000/usuarios');
  setUsers(usersFromApi.data);
}

// Função para criar novo usuário
async function createUser() {
  await axios.post('http://localhost:3000/usuarios', {
    name: inputName,
    email: inputEmail,
    age: inputAge
  });
  getUsers(); // Atualiza a lista
}

// Função para deletar usuário
async function deleteUser(id) {
  await axios.delete(`http://localhost:3000/usuarios/${id}`);
  getUsers(); // Atualiza a lista
}
```

### Fluxo de Dados

```
User Input (Frontend)
      ↓
   useState Hook
      ↓
   Axios Request
      ↓
Express API (Backend)
      ↓
  Prisma ORM
      ↓
MongoDB Atlas
      ↓
Response (JSON)
      ↓
  setUsers Hook
      ↓
Re-render Interface
```

## 🔒 Segurança e Boas Práticas

### ✅ Implementadas

- ✅ Variáveis de ambiente para credenciais sensíveis
- ✅ `.gitignore` configurado para não versionar `.env`
- ✅ Validação de email único no banco de dados
- ✅ Uso de Promises e async/await
- ✅ ORM (Prisma) para queries seguras
- ✅ Separação clara entre front-end e back-end
- ✅ Código organizado e componentizado

## 📚 Conceitos Aprendidos

Este projeto cobre fundamentos essenciais de desenvolvimento fullstack:

### Backend
- ✅ Criação de APIs RESTful
- ✅ Métodos HTTP (GET, POST, PUT, DELETE)
- ✅ Rotas e middlewares no Express
- ✅ Integração com banco de dados NoSQL (MongoDB)
- ✅ ORM/ODM com Prisma
- ✅ Variáveis de ambiente

### Frontend
- ✅ Componentes React
- ✅ Hooks (useState)
- ✅ Requisições HTTP com Axios
- ✅ Renderização condicional
- ✅ Manipulação de eventos
- ✅ Atualização de estado
- ✅ Integração com API externa

### Fullstack
- ✅ Comunicação cliente-servidor
- ✅ CRUD completo
- ✅ Arquitetura de aplicação moderna
- ✅ Debugging e testes de API

## 🚧 Melhorias Futuras

### Funcionalidades
- [ ] Sistema de autenticação e login
- [ ] Validação de formulários com feedback visual
- [ ] Confirmação antes de deletar usuário
- [ ] Paginação da lista de usuários
- [ ] Sistema de busca/filtros
- [ ] Ordenação por nome, idade, etc.
- [ ] Animações e transições

## 📝 Licença

Este projeto está sob a licença MIT. Isso significa que você pode:
- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Usar privativamente

Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com 💙 por **[Seu Nome]**

- 🐙 GitHub: [@carloslacerda](https://github.com/CarlosLacerda)
- 💼 LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- 📧 Email: carlosalacerda01@gmail.com
- 🌐 Portfolio: [Meu Portfolio](https://carloslacerda-portfolio.netlify.app/)

## 🙏 Agradecimentos

- 📺 Tutorial inspirado nos vídeos de **Rodolfo Mor**
- 💜 Comunidades React e Node.js
- 📖 Documentação oficial do Prisma

## 📚 Recursos Úteis

- [Documentação do Node.js](https://nodejs.org/docs/)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do React](https://react.dev/)
- [Documentação do Prisma](https://www.prisma.io/docs)
- [MongoDB Atlas](https://www.mongodb.com/docs/atlas/)
- [Vite Guide](https://vitejs.dev/guide/)

---

<div align="center">

⭐ **Se este projeto te ajudou, deixe uma estrela no repositório!** ⭐


</div>
