// Arquivo de configuração para variáveis de ambiente no Vercel

/**
 * Configuração para variáveis de ambiente sensíveis no Vercel
 * Este arquivo deve ser referenciado na documentação e no README
 * para equipe de deploy
 */

// Configuração do .env.production com variáveis sensíveis
export const sensitiveEnvVars = [
  {
    key: "OPENAI_API_KEY",
    value: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Placeholder - inserir chave real no Vercel
    type: "encrypted",
    target: ["production", "preview"],
    comment: "API Key da OpenAI para embeddings e LLM - NÃO EXPOR NO CLIENTE"
  },
  {
    key: "ANTHROPIC_API_KEY",
    value: "sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Placeholder - inserir chave real no Vercel
    type: "encrypted",
    target: ["production", "preview"],
    comment: "API Key da Anthropic para APIs - NÃO EXPOR NO CLIENTE"
  },
  {
    key: "SENTRY_DSN",
    value: "https://xxxxx@xxxxxx.ingest.sentry.io/xxxxx", // Placeholder - inserir DSN real no Vercel
    type: "plain",
    target: ["production", "preview", "development"],
    comment: "DSN do Sentry para monitoramento de erros"
  },
  {
    key: "SUPABASE_SERVICE_ROLE_KEY",
    value: "placeholder-supabase-service-role-key", // Placeholder - inserir chave real no Vercel
    type: "encrypted",
    target: ["production", "preview"],
    comment: "Chave de serviço do Supabase - APENAS para operações no servidor"
  },
  {
    key: "LLAMA_CLOUD_ORG_ID",
    value: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Placeholder - inserir ID real no Vercel
    type: "plain",
    target: ["production", "preview", "development"],
    comment: "ID da organização no LlamaIndex Cloud"
  },
  {
    key: "LLAMA_CLOUD_PROJECT_ID",
    value: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Placeholder - inserir ID real no Vercel
    type: "plain",
    target: ["production", "preview", "development"],
    comment: "ID do projeto no LlamaIndex Cloud"
  }
];

// Lista de variáveis seguras para o cliente
export const publicEnvVars = [
  {
    key: "NEXT_PUBLIC_SUPABASE_URL",
    value: "https://your-project-id.supabase.co", // Placeholder - inserir URL real no Vercel
    type: "plain",
    target: ["production", "preview", "development"],
    comment: "URL do projeto Supabase"
  },
  {
    key: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    value: "placeholder-supabase-anon-key", // Placeholder - inserir chave real no Vercel
    type: "plain",
    target: ["production", "preview", "development"],
    comment: "Chave anônima do Supabase (segura para expor no cliente)"
  },
  {
    key: "NEXT_PUBLIC_USE_SUPABASE",
    value: "true",
    type: "plain",
    target: ["production", "preview", "development"],
    comment: "Ativar o uso do Supabase (true/false)"
  }
];

/**
 * Instruções para configuração no Vercel:
 * 
 * 1. No dashboard do Vercel, acesse Settings > Environment Variables
 * 2. Adicione cada variável acima como uma variável de ambiente
 * 3. Para as variáveis sensíveis, marque a opção "Encrypt" para maior segurança
 * 4. Configure o escopo apropriado (Production, Preview, Development)
 * 5. Variáveis com prefixo NEXT_PUBLIC_ são expostas ao cliente
 * 6. As demais variáveis são acessíveis apenas no servidor
 * 
 * OBS: As chaves da API devem ser armazenadas como variáveis sensíveis
 * e NUNCA expostas ao cliente (não usar prefixo NEXT_PUBLIC_).
 */