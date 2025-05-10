# Projeto Agente de Inteligência Artificial

Este repositório contém um sistema de agentes de IA com integração com LlamaIndex, Superagent e Supabase.

## Arquitetura de Segurança

O projeto implementa uma arquitetura de segurança robusta para proteger APIs e dados dos usuários:

### Clientes Supabase

O sistema utiliza diferentes clientes Supabase para separar preocupações de segurança:

1. **Cliente do Navegador** (`client-browser.ts`)
   - Usa apenas a chave anônima (segura para expor no cliente)
   - Implementa apenas operações que respeitam as regras de segurança (RLS)
   - Gerencia autenticação no lado do cliente

2. **Cliente do Servidor** (`server.ts`)
   - Usa a chave de serviço para operações administrativas
   - Implementado com segurança nas Edge Functions e API Routes
   - Nunca exposto no navegador do cliente

3. **Cliente de Autenticação** (`server.ts`)
   - Gerencia cookies de autenticação no servidor
   - Mantém sessões de usuário seguras

## LlamaIndex e RAG

Este projeto incorpora Retrieval-Augmented Generation (RAG) usando LlamaIndex:

### Exemplos de LlamaIndex

- **Chat Engine**: Interface de chat simples com documentos em memória
- **Agentes**: Cria agentes para responder perguntas sobre informações da empresa
- **Carregamento de Documentos**: Carrega documentos, cria índices e consultas
- **LlamaIndex Cloud API**: Utiliza a API Cloud para processar documentos
- **Sistema RAG Completo**: Aplicação RAG interativa e completa

### Executando Exemplos de LlamaIndex

```bash
# Instalar dependências
cd llamaindex-examples
npm install

# Executar o chat engine
npm run chat

# Executar exemplo de agente
npm run agent

# Carregar documentos
npm run docs

# Usar a API LlamaIndex Cloud
npm run cloud

# Executar o sistema RAG completo
npm run rag
```

## Configuração e Instalação

### Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```
# Configuração OpenAI e LlamaIndex
OPENAI_API_KEY=sk-xxxx
LLAMA_CLOUD_API_KEY=llx-xxxx

# Configuração Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxxx
```

> **IMPORTANTE**: Nunca comite suas chaves de API no repositório. Use variáveis de ambiente!

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Criar build de produção
npm run build
```

## Integração com Superagent

Este projeto inclui integração com Superagent para gestão avançada de agentes:

- `frontend/app/lib/superagent-client.ts` - Cliente para gerenciar agentes do Superagent
- `frontend/app/lib/superagent-adapter.ts` - Adaptador para integrar Superagent com outras partes do sistema

## Segurança e Boas Práticas

- **Nunca exponha** chaves de API privadas no código do cliente
- Use sempre o `.gitignore` para excluir arquivos de ambiente (`.env*`)
- Implemente autenticação adequada para todas as rotas de API
- Siga o princípio do menor privilégio para acesso a dados

## Recursos e Documentação

- [Supabase - Segurança e Autenticação](https://supabase.com/docs/guides/auth)
- [LlamaIndex TypeScript](https://ts.llamaindex.ai/)
- [Documentação do Superagent](https://docs.superagent.sh/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)