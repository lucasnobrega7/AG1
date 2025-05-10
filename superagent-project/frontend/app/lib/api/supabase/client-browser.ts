import { createClient } from '@supabase/supabase-js';

// IMPORTANTE: Este cliente deve ser usado APENAS no navegador
// e APENAS para operações que não envolvem dados sensíveis ou chaves secretas

// Verificar se as variáveis de ambiente estão definidas
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error(
    'NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY devem ser definidos nas variáveis de ambiente'
  );
}

// Configurações do Supabase (apenas as públicas)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Criar cliente Supabase para o navegador
// Este cliente usa apenas a chave anônima e operações seguras no cliente
export const createBrowserClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true, // Manter sessão entre recargas de página
      autoRefreshToken: true, // Renovar token automaticamente
      detectSessionInUrl: true // Detectar token na URL (para auth redirects)
    }
  });
};

// Exportar apenas funções SEGURAS para uso no cliente
// Não importar nem utilizar chaves de serviço ou operações sensíveis aqui
export const getBrowserClient = () => {
  const client = createBrowserClient();
  
  return {
    // Autenticação (operações seguras no cliente)
    signIn: async (email: string, password: string) => {
      return await client.auth.signInWithPassword({ email, password });
    },
    
    signUp: async (email: string, password: string) => {
      return await client.auth.signUp({ email, password });
    },
    
    signOut: async () => {
      return await client.auth.signOut();
    },
    
    // Operações de leitura que respeitam RLS
    getPublicAgents: async () => {
      const { data, error } = await client
        .from('agents')
        .select('*')
        .eq('is_public', true)
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error('Erro ao buscar agentes públicos:', error);
        throw error;
      }
      
      return data || [];
    },
    
    // Auth helpers
    getSession: async () => {
      return await client.auth.getSession();
    },
    
    getUser: async () => {
      const { data } = await client.auth.getUser();
      return data.user;
    },
    
    // Storage (apenas operações que respeitam políticas)
    getPublicUrl: (bucket: string, path: string) => {
      return client.storage.from(bucket).getPublicUrl(path).data.publicUrl;
    }
  };
};