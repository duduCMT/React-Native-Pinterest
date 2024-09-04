![](.github/assets/images/logo.png)

# Pinterest UI (UI Clone) - React Native
[![](https://img.shields.io/badge/Status-Finalizado-blue)](#) 
[![](https://img.shields.io/badge/Version-1.0.0-yellow)](#)

## 📸 Preview 

<div align="center">
  <div style="display: flex; justify-content: center;">
    <img src=".github/assets/images/preview01.gif" style="height: 500px;">
  </div>
</div>

## 📝 Descrição

Projeto simples para recriação da tela principal do Pinterest usando React Native (Expo), Animação de Splash Screen, carregamento em Skeleton e Bottom Sheet a partir do Tab no novo Expo Router.

## 🚀 Objetivo

Projeto para prática e aprendizado das libs do Expo mais recentes (2023 e 2024). A ideia é entender melhor os conceitos implementados recentemente como o Expo-Router. Também foi explorado alguns conceitos de animação usando Reanimated e Moti.

## 📚 Principais Libs Utilizadas

- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Bottom Sheet](https://ui.gorhom.dev/components/bottom-sheet/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Moti](https://moti.fyi/)

## 🔎 Instruções para rodar o projeto
📌 **Pré requisitos:**
1. Tenha o repositório clonado em sua máquina.
2. Tenha o [NodeJS](https://nodejs.org/) instalado em sua máquina.
3. É importante configurar o seu próprio `.env` e `.env.local` baseando-se no `.env.exemple` presente no projeto (Caso tenha).


🚩 **Como Executar:**
1. Com o terminal aberto no diretório do projeto, execute o comando `npm i --force` para instalar as dependências.
2. Após a instalação, você deve rodar o projeto localmente usando o comando `npm start` e escolher as opções para execução a depender do ambiente. (Esse projeto também é compatível com o Expo Go.)
3. Caso queira executar o expo e limpar o cache, use `expo start -c` para executar e limpar o cache.

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

## 📸 Preview das Telas

<div align="center">
  <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 8px;">
    <img src=".github/assets/images/preview01.png" style="height: 420px;">
    <img src=".github/assets/images/preview02.png" style="height: 420px;">
  </div>
</div>
