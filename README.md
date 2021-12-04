<h1 align="center"><a href="https://github.com/d00vy/nefertiti-node">nefertiti-node</a></h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
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
* [https://d00vy.github.io/nefertiti-node/](https://d00vy.github.io/nefertiti-node/)

## 🛠️ Usage
This is a pure ES6 module designed to be used in a node.js environment.

```bash
## Install with npm:
npm i nefertiti-node
```

```js
// Import the plugin to your project:
import nefertiti from 'nefertiti-node'

// or dynamically import it:
async function nefertitiNode() {
  return (nefertiti = await import('nefertiti-node'))
}
nefertitiNode().then(nefertiti => console.log(nefertiti))

// Output from console.log(nefertiti)
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

* Website: https://d00vy.com
* Github: [@d00vy](https://github.com/d00vy)

## 📝 License

Copyright © 2021 [d00vy](https://github.com/d00vy) | <the@d00vy.com>.<br />
This project is [GPL-3](https://github.com/d00vy/nefertiti-node/blob/master/LICENSE) licensed.

***
*Investing in crypto is high risk. Only use these tools if you understand and accept these risks.*