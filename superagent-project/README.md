# AG1 - Plataforma de Agentes de IA com RAG

## 🚀 Sobre o Projeto

AG1 é uma plataforma de criação de agentes de IA personalizados utilizando Retrieval-Augmented Generation (RAG), permitindo que usuários criem chatbots inteligentes com conhecimento específico.

## 🛠️ Tecnologias Principais

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase, PostgreSQL, Edge Functions
- **IA/ML**: LlamaIndex, OpenAI, Anthropic
- **Infraestrutura**: Vercel, Docker
- **Monitoramento**: Sentry

## 📁 Estrutura do Projeto

```
AG1/
├── frontend/          # Aplicação Next.js
├── backend/           # APIs e serviços
├── supabase/          # Migrações e configurações
├── docs/              # Documentação
└── scripts/           # Scripts de automação
```

## 🚀 Quick Start

### Pré-requisitos

- Node.js 20+
- npm ou pnpm
- Conta no Supabase
- Chaves de API (OpenAI, Anthropic)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucasnobrega7/AG1.git
   cd AG1
   ```

2. Instale as dependências:
   ```bash
   cd frontend
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   # Edite .env.local com suas chaves
   ```

4. Execute as migrações do Supabase:
   ```bash
   cd ../supabase
   supabase db push
   ```

5. Inicie o desenvolvimento:
   ```bash
   cd ../frontend
   npm run dev
   ```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático em cada push para `main`

### Docker

```bash
docker-compose up -d
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Convenções de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

## 🔒 Segurança

- Nunca commitar chaves de API
- Usar variáveis de ambiente para configurações sensíveis
- Seguir as práticas de segurança do Supabase RLS

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Time

- Lucas Nóbrega - [@lucasnobrega7](https://github.com/lucasnobrega7)

## 🙏 Agradecimentos

- [LlamaIndex](https://www.llamaindex.ai/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)