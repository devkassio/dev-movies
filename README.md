# 🎬 DevMovies

<div align="center">
  <img width="1380" height="793" alt="Macbook-Air-localhost (1)" src="https://github.com/user-attachments/assets/01132d03-0701-4da5-97b0-7b8e7ace2fa7" width="800"/>

    
  <br><br>
   [Confira o Projeto aqui.](https://devkassio.github.io/dev-movies)
  <br><br>
  <br><br>
  <img alt="React" src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Styled Components" src="https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img alt="TMDb" src="https://img.shields.io/badge/TMDb-API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" />
</div>

<div align="center">
  <strong>Uma aplicação moderna de catálogo de filmes e séries construída com React, inspirada no Netflix, utilizando a API do The Movie Database (TMDb) para dados em tempo real.</strong>
  <br><br>
  <a href="https://dev-movies.vercel.app">🚀 Demo Live</a> • 
  <a href="#funcionalidades">📖 Funcionalidades</a> • 
  <a href="https://github.com/devkassio/dev-movies/issues">🐛 Reportar Bug</a> • 
  <a href="https://github.com/devkassio/dev-movies/issues">✨ Solicitar Feature</a>
</div>

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [API](#api)
- [Componentes](#componentes)
- [Estilos](#estilos)
- [Design Responsivo](#design-responsivo)
- [Roadmap](#roadmap)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## 🌟 Sobre o Projeto

O **DevMovies** é uma aplicação web responsiva que oferece uma experiência cinematográfica inspirada no Netflix. Com design mobile-first e interface intuitiva, os usuários podem explorar um vasto catálogo de filmes e séries, consumindo dados em tempo real da API do TMDb. Destaques incluem seções hero com filmes em destaque, carrosséis interativos e páginas dedicadas com filtros avançados.

### ✨ Principais Características

- 🔥 **Filme em Destaque**: Seção hero com o filme mais popular.
- 🎪 **Carrosséis Interativos**: Navegação fluida por listas de top filmes e séries.
- 📱 **Design Responsivo**: Adaptado para mobile, tablet e desktop.
- ⚡ **Performance Otimizada**: Construído com Vite para carregamento rápido.
- 🎨 **Styled Components**: Estilização moderna e componentizada.
- 🌐 **SPA**: Single Page Application com roteamento via React Router.
- 🔍 **Filtros e Paginação**: Busca por gênero, popularidade e carregamento progressivo.
- 🚀 **Sistema Anti-duplicação**: Conteúdo único e organizado.

## 🎯 Funcionalidades

### Páginas Principais

- **🏠 Home**: Página inicial com filme em destaque, carrosséis de top filmes/séries e populares.
- **🎬 Filmes**: Catálogo completo com grid responsivo, filtros por gênero (Ação, Drama, Comédia etc.) e paginação inteligente.
- **📺 Séries**: Catálogo dedicado para séries de TV, com filtros por gênero/popularidade e detalhes de temporadas/episódios.
- **🎭 Detalhes**: Página individual com sinopse, avaliação, duração, elenco, trailers (em modal) e recomendações similares.

### Componentes Interativos

- **Header**: Navegação principal com logo e links.
- **Hero Section**: Apresentação do filme popular com informações básicas.
- **Carrossel de Filmes/Séries**: Sliders horizontais com navegação suave.
- **Cards Responsivos**: Exibição de itens com tamanhos otimizados (estilo Netflix).
- **Modal**: Janelas para trailers e detalhes expandidos.
- **Botões e SpanGenres**: Componentes reutilizáveis para ações e tags de gêneros.

### Recursos Técnicos

- **Lazy Loading**: Otimização de imagens para melhor performance.
- **Error Handling**: Tratamento de erros em requisições API.
- **Requisições Concorrentes**: Uso de `Promise.all` para carregamento otimizado.
- **SEO Friendly**: Estrutura semântica otimizada para mecanismos de busca.

## 🚀 Tecnologias Utilizadas

### Frontend Core

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [React](https://reactjs.org/) | 19.1.1 | Biblioteca JavaScript para construção de interfaces |
| [React Router DOM](https://reactrouter.com/) | 7.9.4 | Roteamento para Single Page Applications |
| [Styled Components](https://styled-components.com/) | 6.1.19 | CSS-in-JS para estilização de componentes |
| [Vite](https://vitejs.dev/) | 7.1.7 | Build tool e servidor de desenvolvimento |

### UI/UX

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Swiper](https://swiperjs.com/) | 12.0.3 | Carrossel e slides responsivos |
| [Google Fonts](https://fonts.google.com/) | - | Tipografia (Montserrat e Poppins) |
| CSS Grid & Flexbox | - | Layouts modernos |

### API e Dados

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Axios](https://axios-http.com/) | 1.12.2 | Cliente HTTP para requisições à API |
| [The Movie Database API](https://www.themoviedb.org/) | - | Fonte de dados de filmes e séries |

### Desenvolvimento

| Ferramenta | Descrição |
|------------|-----------|
| ESLint | Linting e padrões de código |
| Prettier | Formatação automática de código |
| JavaScript (ES6+) | Linguagem principal |

## 📁 Estrutura do Projeto

```
dev-movies/
│
├── public/                 # Arquivos públicos estáticos
│
├── src/
│   ├── assets/             # Imagens, logos e recursos estáticos
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Button/         # Componente de botão
│   │   ├── Card/           # Card de filme/série
│   │   ├── Credits/        # Elenco e créditos
│   │   ├── Header/         # Cabeçalho da aplicação
│   │   ├── Modal/          # Componente modal
│   │   ├── Slider/         # Carrossel de itens
│   │   └── SpanGenres/     # Tags de gêneros
│   │
│   ├── containers/         # Páginas/Containers principais
│   │   ├── Home/           # Página inicial
│   │   ├── Movies/         # Página de filmes
│   │   ├── Series/         # Página de séries
│   │   └── Detalhes/       # Página de detalhes
│   │
│   ├── layout/             # Layouts da aplicação
│   │   └── DefaultLayout.jsx
│   │
│   ├── routes/             # Configuração de rotas
│   │   └── routes.jsx
│   │
│   ├── services/           # Serviços e APIs
│   │   └── api.js          # Configuração do Axios/TMDb
│   │
│   ├── styles/             # Estilos globais
│   │   └── globalStyles.js
│   │
│   ├── utils/              # Funções utilitárias
│   │   └── getImages.js    # Helper para URLs de imagens
│   │
│   └── main.jsx            # Ponto de entrada da aplicação
│
├── index.html              # Template HTML principal
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
└── README.md               # Documentação do projeto
```

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/devkassio/dev-movies.git
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd dev-movies
   ```

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Configure a API do TMDb** (Opcional)
   - O projeto já vem com uma chave de API configurada.
   - Para usar sua própria chave, edite o arquivo `src/services/api.js`.
   - Obtenha sua chave em: [The Movie Database API](https://www.themoviedb.org/settings/api)

## 🚀 Como Usar

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build de Produção
```bash
npm run build
# ou
yarn build
```

### Preview da Build
```bash
npm run preview
# ou
yarn preview
```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção |
| `npm run lint` | Executa o linter ESLint |
| `npm run format` | Formata o código com Prettier |

## 🌐 API

O projeto utiliza a **The Movie Database (TMDb) API** para obter dados de filmes e séries.

### Endpoints Utilizados

- `GET /movie/popular` - Filmes populares
- `GET /movie/top_rated` - Filmes mais bem avaliados
- `GET /tv/top_rated` - Séries mais bem avaliadas

### Configuração da API

```javascript
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'sua-chave-api',
    language: 'pt-BR',
    page: 1,
  },
});
```

### Funcionalidades Técnicas

#### Sistema Anti-duplicação
```javascript
// Remove duplicatas usando Set()
const uniqueMovies = [...new Set(movies.map(movie => movie.id))]
  .map(id => movies.find(movie => movie.id === id));
```

#### Carregamento Otimizado
```javascript
// Requisições concorrentes com Promise.all
const [movies, series, credits] = await Promise.all([
  getMovies(),
  getSeries(),
  getCredits(),
]);
```

#### Configuração Responsiva do Swiper
```javascript
// Configuração responsiva do Swiper
breakpoints: {
  320: { slidesPerView: 2.2 },
  768: { slidesPerView: 3.5 },
  1024: { slidesPerView: 4.5 },
}
```

## 🧩 Componentes

- **Button**: Componente de botão reutilizável com estilos customizados.
- **Card**: Exibe informações de filmes/séries em formato de card.
- **Header**: Cabeçalho da aplicação com logo e navegação.
- **Modal**: Componente modal para exibir informações detalhadas.
- **Slider**: Carrossel horizontal para navegação entre itens.
- **Credits**: Exibição de elenco e créditos.
- **SpanGenres**: Tags de gêneros.

## 🎨 Estilos

O projeto utiliza **Styled Components** para estilização:

- 🎨 Design moderno e responsivo
- 🌙 Paleta de cores elegante
- 📱 Mobile-first approach
- ⚡ Performance otimizada
- 🔧 Componentes reutilizáveis

### Fontes Utilizadas

- **Montserrat**: Títulos e destaques
- **Poppins**: Texto geral

## 📱 Design Responsivo

### Breakpoints Otimizados

- **Mobile**: 320px - 480px (Cards 2.2x)
- **Tablet**: 481px - 768px (Cards 3.5x)
- **Desktop**: 769px - 1024px (Cards 4.5x)
- **Large**: 1025px+ (Cards 5.5x)

### Features Mobile

- 🔄 **Touch Navigation**: Swipe e scroll otimizados
- 📏 **Card Sizing**: Tamanhos estilo Netflix mobile
- 🎯 **Touch Targets**: Botões 44px+ para acessibilidade
- ⚡ **Performance**: Animações otimizadas para mobile

## 🎯 Roadmap

- [ ] 🔍 **Sistema de Busca**: Pesquisa global avançada
- [ ] ❤️ **Lista de Favoritos**: Persistência local
- [ ] 👤 **Sistema de Usuários**: Login e perfis
- [ ] 🎬 **Player Integrado**: Reprodução de trailers
- [ ] 🌍 **i18n**: Suporte multi-idiomas
- [ ] 📊 **Analytics**: Métricas de uso
- [ ] 🔔 **Notificações**: Lançamentos e atualizações
- [ ] 📱 **PWA**: Progressive Web App

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Padrões de Código

- Use ESLint e Prettier
- Siga os padrões de commit convencionais
- Documente novas funcionalidades
- Adicione testes quando necessário


## 👨‍💻 Autor

**Kassio** - *Desenvolvedor Full Stack*

- GitHub: [@devkassio](https://github.com/devkassio)
- Email: kassioxis@icloud.com
- LinkedIn: [Kássio Barros](https://linkedin.com/in/kassiobarros)

<div align="center">
  <img alt="Made with Love" src="https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square" />
  <img alt="Powered by Coffee" src="https://img.shields.io/badge/Powered%20by-☕-brown?style=flat-square" />
</div>

## 🙏 Agradecimentos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) pela API gratuita
- [React](https://reactjs.org/) pela excelente biblioteca
- [Vite](https://vitejs.dev/) pela ferramenta de build incrível
- [Styled Components](https://styled-components.com/) pela solução de CSS-in-JS
- [Swiper](https://swiperjs.com/) pelos carrosséis responsivos

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!**

</div>
