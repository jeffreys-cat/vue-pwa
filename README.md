# vue-pwa-typescript
A simple vue example with typescript, support pwa by webpack `offline plugin`.

## SkillSet
Vue + Vue-Router + Vuex + Scss + Webpack4 + TypeScript + RxJS

## Install
<pre><code>yarn install</code></pre>

## Run
<pre><code>yarn start</code></pre>

## Build
<pre><code>yarn build</code></pre>

## Lint
<pre><code>yarn lint</code></pre>

## Notices
1. DEV Environment ServiceWorker Will Not Working.

## Some Tips In Config
1. Webpack extensions array must include `.tsx`, otherwise `Can't Resolve File` Error will Occur.

2. Tsconfig module must be set to `esnext`, otherwise dynamic import will not working.

3. Webpack ts-loader must has option `appendTsSuffixTo: [/\.vue$/]`, And import vue file must has `.vue` extension, otherwise, vue file will not be recognized by typescript.
