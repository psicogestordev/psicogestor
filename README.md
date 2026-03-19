# Psicogestor

Sistema de gestão para psicólogos e clínicas de psicologia.

## Setup do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm
- MongoDB 

### Como Começar

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd psicogestor
```

2. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do MongoDB.

3. Instale as dependências do cliente:

```bash
cd client
npm install
```

4. Execute o cliente em modo de desenvolvimento:

```bash
npm run dev
```

### Estrutura do Projeto

- `client/` - Aplicação frontend em React
- `server/` - Backend da aplicação
- `.env.example` - Exemplo de configuração de ambiente

### Scripts Disponíveis

No diretório `client/`:

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run lint` - Executa linting do código
- `npm run preview` - Preview do build de produção
