# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Som Ambiente - Projeto Responsivo 🎨

Um projeto moderno e responsivo desenvolvido com React, TypeScript, Vite e Tailwind CSS v4.

## ✨ Características

- 🚀 **Vite** - Build tool ultrarrápido
- ⚛️ **React 19** - Framework JavaScript moderno
- 📘 **TypeScript** - Tipagem estática
- 🎨 **Tailwind CSS v4** - Framework CSS utility-first
- 📱 **Design Responsivo** - Funciona em todos os dispositivos
- 🌈 **Gradientes Animados** - Efeitos visuais modernos
- 🍔 **Menu Mobile** - Navegação responsiva

## 🚀 Como executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/som-ambiente.git

# Entre no diretório
cd som-ambiente

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173/`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 🎨 Tecnologias Utilizadas

- [React](https://react.dev/) - Biblioteca JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Linguagem tipada
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [ESLint](https://eslint.org/) - Linter JavaScript

## 📱 Features Responsivas

- ✅ Header com menu responsivo
- ✅ Hero section com tipografia adaptativa
- ✅ Grid de features que se adapta ao tamanho da tela
- ✅ Footer responsivo
- ✅ Gradientes e animações suaves

## 🤝 Contribuição

Sinta-se à vontade para contribuir com o projeto!

## 📄 Licença

Este projeto está sob a licença MIT.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
