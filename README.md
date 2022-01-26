<h1 align="center"><a href="https://github.com/d00vy/nefertiti-node">nefertiti-node</a></h1>
<p align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/d00vy/nefertiti-node">
  <a href="https://d00vy.github.io/nefertiti-node/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/d00vy/nefertiti-node/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/d00vy/nefertiti-node/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL3" src="https://img.shields.io/github/license/d00vy/nefertiti-node" />
  </a>
</p>

> **nefertiti-node** is a node.js library of useful tools and utilities for working with Nefertiti crypto trading bot

## 📚 Documentation

- [https://d00vy.github.io/nefertiti-node/](https://d00vy.github.io/nefertiti-node/)

## 🛠️ Usage

`nefertiti-node` is a hybrid/dual package offering both ESM and CommonJS.

```bash
## Install with npm:
npm i nefertiti-node
```

Use as an ES module:

```js
// Import the plugin to your project:
import nefertiti from 'nefertiti-node';

// console log the object
console.log(nefertiti);

// and use a function:
nefertiti.functions.getSupportedExchanges();
```

Use as a CommonJS module:

```js
// Require the plugin
const nefertiti = require('nefertiti-node');

// console log the object
console.log(nefertiti);

// and use a function:
nefertiti.functions.getSupportedExchanges();
```

Output from `console.log(nefertiti)`:

```js
  [Module: null prototype] {
    apis: [Module: null prototype] {
      deleteBot: [Function: deleteBot],
      pingBot: [AsyncFunction: pingBot],
      pingHub: [AsyncFunction: pingHub],
      postBot: [AsyncFunction: post],
      updateBot: [AsyncFunction: updateBot]
    },
    functions: [Module: null prototype] {
      filterMarketsByCurrency: [Function: filterMarketsByCurrency],
      getAvailableMarkets: [Function: getAvailableMarkets],
      getCurrentNefVersion: [Function: checkNefVersion],
      getSupportedExchanges: [Function: getSupportedExchanges],
      sendNotificationsTest: [Function: sendNotificationsTest],
      startNefListenServer: [Function: startNefListenServer],
      startNefListenServerAsync: [AsyncFunction: startNefListenServerAsync],
      updateNef: [Function: updateNef]
    },
    helpers: [Module: null prototype] {
      downloadNefertiti: [Function: downloadNefertitiFromGithub],
      getArch: [Function: getArch],
      getPlatform: [Function: getPlatform]
    },
    variables: [Module: null prototype] {
      currentDirectory: 'nefertiti-node',
      executable: 'nefertiti-node\\bin\\nefertiti_windows_amd64.exe',
      executableName: 'nefertiti_windows_amd64',
      executablePath: 'nefertiti-node\\bin',
      nefertitiURL: {
        hostname: 'http://127.0.0.1',
        port: 38700,
        ping: '/ping',
        post: '/post'
      }
    }
  }
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />
Feel free to check the [issues page](https://github.com/d00vy/nefertiti-node/issues).

## 👏 Show your support

Give a ⭐️ if this project helped you! <br />
Join the 💬 [Nefertiti Telegram](https://t.me/nefertititradebot) <br />
Visit my [blog](https://d00vy.com) and get in touch!

## 🤪 Author

👤 **d00vy | <the@d00vy.com>**

- Website: https://d00vy.com
- Github: [@d00vy](https://github.com/d00vy)

## 📝 License

Copyright © 2021 [d00vy](https://github.com/d00vy) | <the@d00vy.com>.<br />
This project is [GPL-3](https://github.com/d00vy/nefertiti-node/blob/master/LICENSE) licensed.

---

_Investing in crypto is high risk. Only use these tools if you understand and accept these risks._
