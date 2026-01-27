**Resumo rápido**

Este repositório é uma aplicação React + TypeScript gerada com Vite. Use `npm run dev` para desenvolvimento local e `npm run build` para produção. A interface usa Material UI (`@mui/material`) e estilos via `@emotion`.

**Comandos importantes**

- Desenvolvimento: `npm run dev` (Vite HMR). Veja [package.json](package.json).
- Build: `npm run build` (compila TypeScript e roda `vite build`).
- Preview do build: `npm run preview`.
- Lint: `npm run lint` (baseado em `eslint`).

**Arquitetura e pontos-chave**

- Código-fonte: [src](src)
- Componentes reutilizáveis ficam em: [src/assets/components](src/assets/components)
  - Exemplo de componente de formulário: [src/assets/components/FomularioCadastro/formularioCadastro.tsx](src/assets/components/FomularioCadastro/formularioCadastro.tsx)
- Configurações de build/TS: [vite.config.ts](vite.config.ts), [tsconfig.app.json](tsconfig.app.json), [tsconfig.json](tsconfig.json)
- Regras de lint: [eslint.config.js](eslint.config.js)

Observação de design: o projeto é intencionalmente simples — Vite serve como bundler/dev server e TypeScript é usado em modo de projeto (ver `tsconfig.*`). Componentes seguem padrão de função (React functional components) com hooks (`useState`).

**Padrões e convenções do projeto**

- Componentes controlados: campos de formulário usam estados locais e `onChange` para atualizar (`useState`). Ex.: o componente de formulário controla `nome`, `sobrenome`, `cpf`, `promocoes` e `novidades`.
- Validação local no componente: o campo `CPF` é normalizado para apenas dígitos e truncado a 11 caracteres antes de setar o estado. Ver o tratamento em [formularioCadastro.tsx](src/assets/components/FomularioCadastro/formularioCadastro.tsx).
- Props de callback: formulários expõem `onSubmit` como prop opcional que recebe um objeto `{ nome, sobrenome, cpf, promocoes, novidades }` — preserve esse contrato ao modificar o componente.
- UI library: use componentes do MUI (`TextField`, `Switch`, `FormControlLabel`, `Button`) consistentemente para aparência e acessibilidade.

**Fluxo de mudança típico (dev)**

1. Rodar `npm run dev` e abrir `http://localhost:5173`.
2. Fazer alteração em `src/...` e validar HMR/console.
3. Rodar `npm run lint` antes de PR.

**Pontos de integração / dependências externas**

- Dependências principais visíveis em [package.json](package.json): `react`, `react-dom`, `vite`, `typescript`, `@mui/material`, `@emotion/*`.
- Não há integrações de backend no repositório (nenhum cliente HTTP centralizado nem .env sensível). Se for adicionar chamadas de API, crie uma pasta `src/services` e centralize interceptores/clientes.

**Orientações para um agente de IA (copilot / assistant)**

- Seja conservador ao alterar contratos de componentes (props). Se for alterar `onSubmit` ou a forma do objeto enviado, atualize todas as chamadas (procure por `onSubmit` no repositório).
- Para mudanças visuais/UX, prefira usar componentes MUI já presentes em vez de adicionar bibliotecas novas.
- Testes não existem neste repositório — não adicione infra de teste sem aprovar com o mantenedor.
- Para mudanças no build, atualize `vite.config.ts` e `tsconfig.*` juntos e confirme `npm run build` localmente.

**Exemplos práticos**

- Corrigir validação de CPF: editar [src/assets/components/FomularioCadastro/formularioCadastro.tsx](src/assets/components/FomularioCadastro/formularioCadastro.tsx) onde o valor do CPF é normalizado com `replace(/\D/g, "").slice(0, 11)`.
- Adicionar uma prop nova a um componente: 1) atualizar a tipagem `type`/`interface`; 2) ajustar valores padrão onde o componente é exportado; 3) rodar `npm run dev` e verificar HMR.

Se algo aqui estiver incompleto ou se houver convenções de equipe que não encontrei, diga quais arquivos/rotinas devo inspecionar e eu atualizo este guia.
