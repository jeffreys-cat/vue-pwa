[![Build Status](https://travis-ci.org/colordove/vue-pwa.svg?branch=master)](https://travis-ci.org/colordove/vue-pwa.svg?branch=master)

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

## Notices
1. DEV Environment ServiceWorker Will Not Working.

2. `Base href` settings: now is my nginx path `vue-pwa`, Build Application must change all of it. it's in `webpack.common.js OfflinePlugin publicPath`、 `webpack.prod.js output publicPath` & `BaseHrefWebpackPlugin`, in `manifest.json` file, `start_url` also has it.

## Some Tips In Config
1. Webpack extensions array must include `.tsx`, otherwise `Can't Resolve File` Error will Occur.

2. Tsconfig module must be set to `esnext`, otherwise dynamic import will not working.

3. Webpack ts-loader must has option `appendTsSuffixTo: [/\.vue$/]`, And import vue file must has `.vue` extension, otherwise, vue file will not be recognized by typescript.
