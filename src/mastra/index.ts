
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { LibSQLStore } from '@mastra/libsql';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';

// Importar o VercelDeployer se o token estiver disponível
// Para uso em produção, configure estas variáveis no .env
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_TEAM_SLUG = process.env.VERCEL_TEAM_SLUG;
const VERCEL_PROJECT_NAME = process.env.VERCEL_PROJECT_NAME || 'mastra-app-lucas';

// Configuração básica do Mastra
const mastraConfig = {
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: process.env.NODE_ENV === 'production' ? "file:../mastra.db" : ":memory:",
  }),
  logger: createLogger({
    name: 'Mastra',
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  }),
  // Telemetria e logging para monitoramento
  telemetry: {
    enabled: true,
  },
};

// Se o token do Vercel estiver configurado, adicione o VercelDeployer
if (VERCEL_TOKEN && VERCEL_TEAM_SLUG) {
  try {
    // Importação dinâmica para evitar erro se o módulo não estiver instalado
    // Para usar esse recurso, instale com: npm install @mastra/deployer-vercel
    const { VercelDeployer } = await import('@mastra/deployer-vercel');
    
    // Adicione o deployer à configuração, usando type assertion para TypeScript
    (mastraConfig as any).deployer = new VercelDeployer({
      teamSlug: VERCEL_TEAM_SLUG,
      projectName: VERCEL_PROJECT_NAME,
      token: VERCEL_TOKEN
    });
    
    console.log('VercelDeployer configurado com sucesso');
  } catch (error) {
    console.log('VercelDeployer não disponível, continuando sem ele');
  }
}

export const mastra = new Mastra(mastraConfig);
