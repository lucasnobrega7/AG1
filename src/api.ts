// API básica para servir como ponto de entrada
import { mastra } from './mastra';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest, 
  res: VercelResponse
) {
  try {
    // Verificar se é uma solicitação para o dashboard
    if (req.url && (req.url.startsWith('/dashboard') || req.url.startsWith('/_mastra'))) {
      // Delegar ao middleware de UI do Mastra
      return mastra.handleDashboardRequest(req, res);
    }
    
    // Informações básicas da API
    const info = {
      status: 'online',
      version: process.env.npm_package_version || '1.0.0',
      message: 'Mastra API está funcionando!',
      endpoints: {
        '/': 'Informações da API',
        '/dashboard': 'Dashboard do Mastra (login: admin/mastra123)',
        '/api/weather': 'Serviço de previsão do tempo (exemplo)'
      },
      mastraStatus: 'loaded',
      dashboardEnabled: true,
      timestamp: new Date().toISOString()
    };
    
    console.log('API endpoint acessado:', req.url);
    return res.status(200).json(info);
  } catch (error: any) {
    console.error('Erro na API:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: error.message 
    });
  }
}