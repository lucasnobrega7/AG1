# Mastra App Lucas

Aplicação Mastra para deploy no Vercel.

## Instalação

```bash
npm install
```

## Desenvolvimento local

```bash
npm run dev
```

## Configuração de Deploy

### Método 1: Deploy Automático com VercelDeployer (Recomendado)

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Obtenha seu token do Vercel:
   - Acesse [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Crie um novo token com o nome "Mastra Deploy"

3. Configure as variáveis no arquivo `.env`:
   ```
   VERCEL_TOKEN=seu_token_aqui
   VERCEL_TEAM_SLUG=seu_time_ou_usuario
   VERCEL_PROJECT_NAME=mastra-app-lucas
   ```

4. Execute o build:
   ```bash
   npm run build
   ```
   
   O `VercelDeployer` irá automaticamente configurar e implantar sua aplicação no Vercel.

### Método 2: Deploy Manual

1. Conecte este repositório ao Vercel
2. Use as seguintes configurações:
   - Framework Preset: Other
   - Build Command: npm run build
   - Output Directory: .mastra
   - Install Command: npm install

## Tecnologias

- Mastra Framework
- LibSQL para armazenamento
- OpenAI AI SDK
- Vercel Deployer