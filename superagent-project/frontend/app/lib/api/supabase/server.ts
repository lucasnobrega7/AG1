import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

// Criar um cliente Supabase seguro para API/Edge Functions
export const createServerSupabaseClient = () => {
  const cookieStore = cookies();
  
  // Validação das variáveis de ambiente no servidor
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Variáveis de ambiente do Supabase não estão configuradas corretamente');
  }

  // Usar service_role para operações no servidor que precisam ignorar RLS
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false
      }
    }
  );
};

// Cliente Supabase para autenticação e operações que respeitam RLS
export const createServerAuthClient = () => {
  const cookieStore = cookies();
  
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Variáveis de ambiente do Supabase não estão configuradas corretamente');
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (name) => cookieStore.get(name)?.value,
        set: (name, value, options) => {
          // Cookies só podem ser definidos em um middleware ou route handler
          // Este é apenas um stub para a interface
        },
        remove: (name, options) => {
          // Idem
        }
      }
    }
  );
};

// Interfaces e tipos
export interface Conversation {
  id?: string;
  user_id: string;
  title: string;
  created_at?: string;
  updated_at?: string;
}

export interface Message {
  id?: string;
  conversation_id: string;
  role: 'user' | 'agent' | 'system';
  content: string;
  agent_id?: string;
  metadata?: any;
  created_at?: string;
}

export interface Agent {
  id?: string;
  user_id: string;
  name: string;
  description: string;
  avatar_url?: string;
  config?: any;
  is_public?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface AgentKnowledgeItem {
  id?: string;
  agent_id: string;
  content_type: 'text' | 'file' | 'url';
  content: string;
  file_name?: string;
  metadata?: any;
  created_at?: string;
}