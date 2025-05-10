# Guia de Segurança

Este documento descreve as práticas de segurança implementadas neste projeto e fornece orientações para manter a segurança do aplicativo.

## Proteção de Chaves de API

### Armazenamento Seguro de Chaves

- **NUNCA comite chaves de API** diretamente no código
- Armazene chaves em arquivos `.env` que estão no `.gitignore`
- Para implantação, use o gerenciador de segredos do seu provedor (Vercel, Firebase, etc.)

### Separação de Chaves

O projeto implementa uma estrita separação de chaves de API:

1. **Chaves Públicas**: Apenas chaves seguras para exposição ao cliente (ex: chave anônima do Supabase)
2. **Chaves Privadas**: Nunca expostas ao cliente, usadas apenas no servidor (ex: chave de serviço do Supabase, OpenAI API key)

## Arquitetura de Segurança do Supabase

### Clientes Separados

- **Cliente do Navegador**: Usando apenas chave anônima e RLS
- **Cliente do Servidor**: Usando chave de serviço, apenas em contextos seguros
- **Cliente de Autenticação do Servidor**: Para gerenciar cookies de autenticação com segurança

### Row-Level Security (RLS)

- Todas as tabelas do Supabase devem ter políticas RLS adequadas
- Autenticação e autorização devem ser verificadas em cada acesso a dados
- Testes de políticas RLS devem ser realizados regularmente

## Configurações Seguras para Implantação

### Vercel

Para configurar variáveis de ambiente no Vercel:

1. Acesse Settings > Environment Variables no dashboard do projeto
2. Adicione cada variável com o escopo apropriado (Production, Preview, Development)
3. Para variáveis sensíveis, marque a opção "Encrypt"
4. Nunca inclua prefixo `NEXT_PUBLIC_` em chaves sensíveis

### Firebase

Para configurar variáveis de ambiente no Firebase:

1. Use o comando `firebase functions:config:set`
2. Ou configure via Console do Firebase em Functions > Configuration
3. Para CI/CD, use secrets encriptados no seu pipeline

## Práticas Seguras para Desenvolvedores

1. **Revisão de Código**: Todas as PRs devem ser revisadas verificando exposição de segredos
2. **Controle de Acesso**: Implemente o princípio do menor privilégio
3. **Validação de Entrada**: Valide todas as entradas do usuário antes de processar
4. **Sanitização de Saída**: Previna XSS sanitizando dados antes de exibi-los
5. **Auditoria**: Mantenha logs de ações sensíveis para auditoria

## Verificações de Segurança Automatizadas

- GitHub Secret Scanning está habilitado neste repositório
- Pre-commit hooks devem ser usados para prevenir commit de chaves e segredos
- GitHub Actions pode ser configurado para verificar vulnerabilidades de segurança

## Relatando Problemas de Segurança

Se você encontrar uma vulnerabilidade de segurança, por favor:

1. **Não crie um Issue público** no GitHub
2. Envie detalhes diretamente para a equipe de segurança via email seguro
3. Inclua etapas para reproduzir o problema, se possível
4. Aguarde confirmação antes de divulgar qualquer informação