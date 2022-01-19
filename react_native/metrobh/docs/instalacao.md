# App MetroBH
| [Inicio](../readme.md) | [Instalação](instalacao.md) | [Arquitetura](arquitetura.md) |
| :---: | :---: | :----: |

## Instalação
versões utilizadas:
* expo: 44.0.0
* react: 17.0.1
* react-native: 0.64.3
* jest: 26.6.3
* jest-expo: 44.0.1
* ts-jest: 26.5.6

### Expo com typescript
`expo init -t expo-template-blank-typescript`

ref: [https://docs.expo.dev/guides/typescript/](https://docs.expo.dev/guides/typescript/)

### Jest para testes
#### Dependencias
* react-test-renderer: `npm i react-test-renderer@17.0.1 --save-dev`
* jest: `npm i jest@26 --save-dev`
* jest-expo: `npm i jest-expo --save-dev`
* ts-jest: `npm i ts-jest@26 --save-dev`
* jest-coverage-badges: `npm i jest-coverage-badges--save-dev`
* @types/jest: `npm i @types/jest --save-dev`
* @types/react-test-renderer: `npm i @types/react-test-renderer --save-dev`
* ts-node: `npm i ts-node --save-dev`
* babel-preset-expo: `npm i babel-preset-expo --save-dev`
* @babel/preset-typescript: `npm i -D @babel/preset-typescript --save-dev`

Criar arquivo `jest.config.js`
``` typescript
import type { Config } from '@jest/types'

const { defaults } = require('jest-config');

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  preset: "jest-expo",
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)",
  ],
  coverageReporters: ["json-summary", "text", "lcov"],
}

export default config;
```
Adicionar `"esModuleInterop": true` no arquivo `tsconfig.json`
```json
 {
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react-native",
    "lib": ["dom", "esnext"],
    "moduleResolution": "node",
    "noEmit": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "strict": true,
    "esModuleInterop": true
  }
}
```
Adicinar scripts de testes no arquivo `package.json`
```json
"test": "jest",
"test:watch": "npm run test --watch",
"test:ci": "npm run test --coverage",
"test:badges": "npm run test:ci  && jest-coverage-badges --input coverage/coverage-summary.json --output __badges__"
```
o arquivo ficará assim:
```json
{
  ...
   "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:ci": "jest --coverage",
    "test:badges": "jest --coverage && jest-coverage-badges --input coverage/coverage-summary.json --output __badges__"
  },
  ...
}
```

Adicionar `'@babel/typescript'` no arquivo `babel.config.js`
```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/typescript'],
  };
};
```

refs: 
* [https://dev.to/ajulibe/setting-up-tests-for-react-native-expo-typescript-371e](https://dev.to/ajulibe/setting-up-tests-for-react-native-expo-typescript-371e)
* [https://jestjs.io/docs/configuration](https://jestjs.io/docs/configuration)
* [https://medium.com/@francesco.agnoletto/how-to-set-up-typescript-with-react-native-4cede6f26203](https://medium.com/@francesco.agnoletto/how-to-set-up-typescript-with-react-native-4cede6f26203)

## Outras dependências
### react-navigation
`npm install @react-navigation/native`
`npm install @react-navigation/bottom-tabs`
`expo install react-native-screens react-native-safe-area-context`

refs: 
* [https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)
* [https://reactnavigation.org/docs/tab-based-navigation](https://reactnavigation.org/docs/tab-based-navigation)

#### Testes
jest/setup.js
```javascript
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
```
jest.config.ts
```typescript
...
 setupFiles: [
   "<rootDir>/jest/setup.js"
 ],
...
```
ref: [https://reactnavigation.org/docs/testing](https://reactnavigation.org/docs/testing)

### @expo/vector-icons 
Já vem instalado

ref: [https://docs.expo.dev/guides/icons/](https://docs.expo.dev/guides/icons/)

lista de icones: [https://icons.expo.fyi/](https://icons.expo.fyi/)

