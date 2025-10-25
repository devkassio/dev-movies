# 🎬 DevMovies

Uma aplicação moderna de catálogo de filmes e séries construída com React, que utiliza a API do The Movie Database (TMDb) para fornecer informações atualizadas sobre filmes populares, top filmes e séries mais bem avaliadas.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [API](#api)
- [Componentes](#componentes)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autor](#autor)

## 🎯 Sobre o Projeto

O **DevMovies** é uma aplicação web responsiva que permite aos usuários navegar por um catálogo abrangente de filmes e séries. A aplicação oferece uma interface moderna e intuitiva, apresentando filmes populares em destaque, carrosséis de filmes e séries mais bem avaliados, tudo isso consumindo dados em tempo real da API do TMDb.

### ✨ Principais Características

- 🔥 **Filme em Destaque**: Exibe o filme mais popular em uma seção hero
- 🎪 **Carrosséis Interativos**: Navegação fluida por listas de filmes e séries
- 📱 **Design Responsivo**: Interface adaptada para todos os dispositivos
- ⚡ **Performance Otimizada**: Construído com Vite para desenvolvimento rápido
- 🎨 **Styled Components**: Estilização moderna e componentizada
- 🌐 **SPA**: Single Page Application com roteamento via React Router

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 7.9.4** - Roteamento para Single Page Applications
- **Styled Components 6.1.19** - CSS-in-JS para estilização de componentes
- **Vite 7.1.7** - Build tool e servidor de desenvolvimento

### UI/UX
- **Swiper 12.0.3** - Carrossel e slides responsivos
- **Google Fonts** - Tipografia (Montserrat e Poppins)

### API e Dados
- **Axios 1.12.2** - Cliente HTTP para requisições à API
- **The Movie Database API** - Fonte de dados de filmes e séries

### Desenvolvimento
- **ESLint** - Linting e padrões de código
- **Prettier** - Formatação automática de código
- **JavaScript (ES6+)** - Linguagem principal

## 🎯 Funcionalidades

### Páginas Principais
- **🏠 Home**: Página inicial com filme em destaque e carrosséis
- **🎬 Filmes**: Catálogo dedicado de filmes
- **📺 Séries**: Catálogo dedicado de séries de TV

### Componentes Interativos
- **Header**: Navegação principal com logo
- **Hero Section**: Filme popular em destaque com informações
- **Carrossel de Filmes**: Top filmes avaliados
- **Carrossel de Séries**: Top séries avaliadas
- **Cards**: Apresentação individual de filmes/séries
- **Botões**: Componentes de ação reutilizáveis
- **Modal**: Janelas modais para informações detalhadas

### Recursos Técnicos
- **Lazy Loading**: Carregamento otimizado de imagens
- **Error Handling**: Tratamento de erros nas requisições
- **Responsive Design**: Adaptação para mobile, tablet e desktop
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 📁 Estrutura do Projeto

```
dev-movies/
│
├── public/                 # Arquivos públicos estáticos
│
├── src/
│   ├── assets/            # Imagens, logos e recursos estáticos
│   │
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Button/        # Componente de botão
│   │   ├── Card/          # Card de filme/série
│   │   ├── Header/        # Cabeçalho da aplicação
│   │   ├── Modal/         # Componente modal
│   │   └── Slider/        # Carrossel de itens
│   │
│   ├── containers/        # Páginas/Containers principais
│   │   ├── Home/          # Página inicial
│   │   ├── Movies/        # Página de filmes
│   │   └── Series/        # Página de séries
│   │
│   ├── layout/            # Layouts da aplicação
│   │   └── DefaultLayout.jsx
│   │
│   ├── routes/            # Configuração de rotas
│   │   └── routes.jsx
│   │
│   ├── services/          # Serviços e APIs
│   │   └── api.js         # Configuração do Axios/TMDb
│   │
│   ├── styles/            # Estilos globais
│   │   └── globalStyles.js
│   │
│   ├── utils/             # Funções utilitárias
│   │   └── getImages.js   # Helper para URLs de imagens
│   │
│   └── main.jsx           # Ponto de entrada da aplicação
│
├── index.html             # Template HTML principal
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Documentação do projeto
```

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

## � Instalação

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
   - O projeto já vem com uma chave de API configurada
   - Para usar sua própria chave, edite o arquivo `src/services/api.js`
   - Obtenha sua chave em: [The Movie Database API](https://www.themoviedb.org/settings/api)

## 🚀 Como Usar

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`

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

- **`npm run dev`** - Inicia o servidor de desenvolvimento
- **`npm run build`** - Cria a build de produção
- **`npm run preview`** - Visualiza a build de produção
- **`npm run lint`** - Executa o linter ESLint
- **`npm run format`** - Formata o código com Prettier

## 🌐 API

O projeto utiliza a **The Movie Database (TMDb) API** para obter dados de filmes e séries:

### Endpoints Utilizados:
- `GET /movie/popular` - Filmes populares
- `GET /movie/top_rated` - Filmes mais bem avaliados
- `GET /tv/top_rated` - Séries mais bem avaliadas

### Configuração da API:
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

## 🧩 Componentes

### Button
Componente de botão reutilizável com estilos customizados.

### Card
Exibe informações de filmes/séries em formato de card.

### Header
Cabeçalho da aplicação com logo e navegação.

### Modal
Componente modal para exibir informações detalhadas.

### Slider
Carrossel horizontal para navegação entre itens.

## 🎨 Estilos

O projeto utiliza **Styled Components** para estilização:

- 🎨 Design moderno e responsivo
- 🌙 Paleta de cores elegante
- 📱 Mobile-first approach
- ⚡ Performance otimizada
- 🔧 Componentes reutilizáveis

### Fontes Utilizadas:
- **Montserrat** - Títulos e destaques
- **Poppins** - Texto geral

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

## � Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍� Autor

**Kassio** - *Desenvolvedor Full Stack*

- GitHub: [@devkassio](https://github.com/devkassio)
- Email: kassioxis@icloud.com
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

## 🙏 Agradecimentos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) pela API gratuita
- [React](https://reactjs.org/) pela excelente biblioteca
- [Vite](https://vitejs.dev/) pela ferramenta de build incrível
- [Styled Components](https://styled-components.com/) pela solução de CSS-in-JS

---

⭐️ Se este projeto te ajudou, considere dar uma estrela no repositório!

---

*Feito com ❤️ e muito ☕ por [Kassio]*
