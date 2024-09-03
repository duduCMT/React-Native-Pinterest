![](.github/assets/images/logo.png)

# Pinterest UI (UI Clone) - React Native
[![](https://img.shields.io/badge/View-Em%20Desenvolvimento-red)]() 
[![](https://img.shields.io/badge/version-1.0.0-yellow)](#)

## 📝 Descrição

Telas principais do Pinterest recriadas usando React Native (Expo).

## 🚀 Objetivo

Projeto para prática e aprendizado da utilização das libs do Expo 2.0 mais recentes (2023 e 2024). A ideia é entender melhor conceitos implementados recentemente como o Expo-Router e compatibilidade entre o Nativo e o Expo-Web.


## 🔎 Instruções para rodar o projeto
📌 **Pré requisitos:**
1. Tenha o repositório clonado em sua máquina.
2. Tenha o [NodeJS](https://nodejs.org/) instalado em sua máquina.
3. É importante configurar o seu próprio `.env` e `.env.local` baseando-se no `.env.exemple` presente no projeto.

🚩 **Como Executar:**
1. Com o terminal aberto no diretório do projeto, execute o comando `npm i --force` para instalar as dependências.
2. Após a instalação, você deve rodar o projeto localmente usando o comando `npm start` e escolher as opções para execução a depender do ambiente. (Esse projeto também é compatível com o Expo Go.)
3. Caso queira executar o expo e limpar o cache, use `expo start -c` para executar e limpar o cache.


## 📚 Libs Utilizadas

- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Bottom Sheet](https://ui.gorhom.dev/components/bottom-sheet/)

## 🗑️ Limpar Chache do EXPO - Windows
Em algumas situações, vai ser necessário limpar o cache do EXPO, para isso, execute os seguintes passos ou confira a [documentação oficial](https://docs.expo.dev/troubleshooting/clear-cache-windows/):

```bash
rm -rf node_modules // Ou apague a pasta manualmente

npm cache clean --force

npm install

watchman watch-del-all

del %localappdata%Temphaste-map-*

del %localappdata%Tempmetro-cache

npx expo start --clear
```

