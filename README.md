# react-marketplace

### `npm create vite@latest`
### `npm install`
### `npm run dev`
<hr/>

### `npm install react-router-dom`
  * use ^6.15.0 
  * Latest versions ("^6.22.2") useResolvedPath hook will fail without parameter 
### `npm i react-redux`
### `npm i @reduxjs/toolkit`

<hr/>

### `npm install antd` 
  [<img src="https://camo.githubusercontent.com/70ec62b59182d7ecbc34f6cfe6f043d6ca17b133c398871ef1cdab0fa4d1e424/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667" width="50"/>](https://www.npmjs.com/package/antd)
  
  ### `npm install styled-components` 

  [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)


### `npm install concurrently --save-dev'
  * `--save-dev` will save dependency in `devDependencies` block
<hr/>

# Server
### `cd server`
### `npm install cors express`

<hr/>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

