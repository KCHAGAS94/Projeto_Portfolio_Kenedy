# Portfólio — Kenedy Chagas

Portfólio pessoal de Kenedy Chagas, Desenvolvedor Full Stack (Web, Back-end & Mobile), construído com Next.js, React e TypeScript.

O site apresenta seções de introdução, sobre, experiência profissional, habilidades técnicas, projetos em destaque (com galeria de imagens) e um carrossel com projetos adicionais.

## Tecnologias

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) / shadcn
- [Embla Carousel](https://www.embla-carousel.com/)
- [Vercel Analytics](https://vercel.com/analytics)

## Estrutura do projeto

```
app/                  # Rotas e layout raiz (App Router)
components/           # Seções e componentes de UI da página
  ui/                 # Componentes de UI reutilizáveis (shadcn)
lib/
  portfolio-data.ts   # Conteúdo do portfólio (projetos, experiências, habilidades)
public/               # Imagens, vídeos e demais arquivos estáticos
```

## Como rodar localmente

Pré-requisitos: Node.js 18+ e pnpm (ou npm).

```bash
# instalar dependências
pnpm install

# ambiente de desenvolvimento
pnpm dev

# build de produção
pnpm build
pnpm start

# lint
pnpm lint
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Editando o conteúdo

Todo o conteúdo dinâmico do portfólio (projetos, experiências profissionais e habilidades) está centralizado em [lib/portfolio-data.ts](lib/portfolio-data.ts), facilitando atualizações sem precisar alterar os componentes de UI.

As imagens e vídeos dos projetos ficam em [public/projects/](public/projects/), organizados em uma pasta por projeto.

## Deploy

O projeto está preparado para deploy na [Vercel](https://vercel.com/).
