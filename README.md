Funil de captação de leads (multi-step form) para o diagnóstico de crescimento,
com envio final para um webhook n8n. Ver `AGENTS.md` para as convenções desta
versão do Next.js antes de mexer no código.

## Configuração

Copie `.env.example` para `.env.local` e preencha:

- `NEXT_PUBLIC_BRAND_*` — nome, headline, descrição e imagens de marca (logo em fundo escuro, logo transparente, fundo do painel lateral).
- `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_META_PIXEL_ID` — em branco, o script correspondente não é carregado.
- `NEXT_PUBLIC_N8N_WEBHOOK_URL` — endpoint que recebe o payload do lead ao final do funil.

Assets de marca já em `public/`: `logo-fundo-preto.jpg` (logo sobre o painel laranja), `logo-sem-fundo.PNG` (logo transparente sobre fundo branco) e `brand-panel-bg.webp` (imagem de fundo do painel lateral).

Regra de qualificação (única pergunta qualificatória, ver [lib/steps.ts](lib/steps.ts) e [lib/qualification.ts](lib/qualification.ts)): lead informa quantos iPhones a loja vende por mês; respostas "De 0 a 20" e "De 20 a 50" são desqualificadas, "De 50 a 150" e "150 ou mais" são qualificadas.

Pendências para ir pra produção:

- **Depoimentos** são placeholders ilustrativos em [lib/testimonials.ts](lib/testimonials.ts) — trocar por depoimentos reais.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
