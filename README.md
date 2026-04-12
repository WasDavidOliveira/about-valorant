# About Valorant

SPA em **Angular** que consome a API comunitária **[valorant-api.com](https://valorant-api.com/)** para exibir conteúdo estático do jogo Valorant: agentes (com ficha individual), mapas, armas e skins, patentes competitivas, temporadas e player cards. A interface usa **Tailwind CSS**, animações de entrada e um carregamento inicial enquanto o app sobe.

> Este projeto é independente e **não é afiliado à Riot Games, Inc.** Valorant é marca registrada da Riot Games.

## Funcionalidades

| Área | Descrição |
|------|-----------|
| **Agentes** | Lista por função (Duelist, Controller, etc.) com cards e página de detalhe por ID. |
| **Mapas** | Galeria com arte e informações dos mapas. |
| **Armas** | Catálogo por categoria, busca de skins no painel expandido e preview em overlay. |
| **Patentes** | Tiers competitivos agrupados por temporada. |
| **Temporadas** | Linha do tempo das temporadas retornadas pela API. |
| **Player cards** | Coleção de cartas com filtro. |

Os dados vêm de endpoints REST públicos; **não há** estatísticas de partidas, MMR em tempo real nem API oficial da Riot no cliente.

## Stack

- Angular **16**
- TypeScript **5.1**
- Tailwind CSS **3** + PostCSS + Autoprefixer
- RxJS, `@angular/animations`
- `HttpClient` com interceptor de **cache em memória** (GET para `valorant-api.com`, TTL configurável)

## Requisitos

- **Node.js** `24.x` (conforme `engines` no `package.json`)

## Como rodar

```bash
git clone https://github.com/DaviProgramming/AboutValorant.git
cd AboutValorant
npm install
npm start
```

Abra **http://localhost:4200/** no navegador.

### Scripts úteis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Servidor de desenvolvimento (`ng serve`). |
| `npm run build` | Build de produção (`ng build`). |
| `npm run watch` | Build em modo watch (desenvolvimento). |
| `npm test` | Testes unitários (Karma + Jasmine). |

## Estrutura (resumo)

```
src/app/
  components/     # UI reutilizável (navbar, main, maps, weapons, …)
  pages/          # Rotas (home, mapas, armas, elos, …)
  services/       # Chamadas HTTP à valorant-api.com
  interceptors/   # Cache de respostas GET
  directives/     # Ex.: scroll reveal
  models/         # DTOs e view models tipados
```

Rotas principais estão em `app-routing.module.ts`.

## Licença e dados

O código deste repositório segue a licença indicada no repositório (se houver arquivo `LICENSE`). Assets e textos retornados pela API pertencem aos respectivos detentores; use apenas de acordo com os termos da API e da Riot para conteúdo derivado do jogo.
